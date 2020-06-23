import React, { useState, useCallback, useMemo, forwardRef, useRef, useEffect, Fragment } from 'react';
import { Badge, Modal, ModalHeader, Button, ModalBody, ModalFooter, Table, InputGroupAddon, InputGroup, InputGroupText, Input } from 'reactstrap';
import {  
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useExpanded,
    useRowSelect 
} from 'react-table';
import { formalizeCamelCaseString } from '../utils/formUtils';

const parseTrueFalseObjectIntoStringObject = (object, objectName) => Object.assign(
    {},
    {
        [objectName]: Object.keys(object).length 
            ? Object.keys(object).reduce(
                (objectString, key) => {
                    if (object[key] && objectString.length) {
                        return `${objectString}, ${formalizeCamelCaseString(key)}`
                    } else if (object[key]) {
                        return formalizeCamelCaseString(key);
                    } else {
                        return objectString;
                    }
            }, '')
            : ''
    }
);

const modifyFormData = formData => {
    const { 
        id: participantId, 
        tripRelatedQuestions, 
        howYouFoundUs, 
        ...participantInfoRest
    } = formData.participantInfo;
    const {
        id: medicalId,
        preexistingConditions, 
        ...medicalInfoRest 
    } = formData.medicalInfo || { 
        id: 0,
        preexistingConditions: {}
    }; 

    const modifiedTripRelatedQuestions = Object.assign(
        {}, 
        ...tripRelatedQuestions.map(tripRelatedQuestion => ({
            [tripRelatedQuestion.question]: tripRelatedQuestion.answer
        })
    ));
    const modifiedHowYouFoundUs = parseTrueFalseObjectIntoStringObject(howYouFoundUs, 'howYouFoundUs');
    const modifiedPreexistingConditions = formData?.medicalInfo && parseTrueFalseObjectIntoStringObject(preexistingConditions, 'preexistingConditions');

    return Object.assign(
        participantInfoRest,
        medicalInfoRest,
        modifiedTripRelatedQuestions,
        modifiedHowYouFoundUs,
        modifiedPreexistingConditions
    );
};

const hookFunc = hooks => {
    hooks.visibleColumns.push(columns => [
        {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </div>
            ),

            Cell: ({ row }) => (
                <div>
                    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
            )
        },
        ...columns
    ])
}

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indetermindate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <>
            <input type='checkbox' className='' ref={resolvedRef} {...rest} />
        </>
    );
});

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter}) => {
    const count = preGlobalFilteredRows.length;
    const [searchValue, setSearchValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <InputGroup className='mb-2'>
            <InputGroupAddon addonType='prepend'>
                <InputGroupText>Search</InputGroupText>
            </InputGroupAddon>
            <Input 
                type='text'
                placeholder={`Search through ${count} forms, by name, phone number, or email`}
                value={searchValue}
                onChange={e => {
                    setSearchValue(e.target.value);
                    onChange(e.target.value);
                }}
            />
        </InputGroup>
    );
}

const FormPicker = ({ formData }) => {
    const [modalOpen, setModalOpen] = useState(true);
    
    const openModal = useCallback(() => setModalOpen(true), [modalOpen]);
    const toggleModal = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);

    const filterTypes = useMemo(() => ({
        text: (rows, id, filterValue) => {
            return rows.filter(row => {
                const rowValue = row.values[id];
                return rowValue !== undefined
                    ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
                    : true
            });
        }
    }), []);

    const columns = useMemo(() => [{
        id: 'expander',
        Header: () => null,
        Cell: ({ row }) => (
            <span {...row.getToggleRowExpandedProps()}>
                {row.isExpanded ? <ion-icon name="caret-down-outline" /> : <ion-icon name="caret-forward-outline" />}
            </span>
        )
    },
    { 
        Header: 'First Name',
        accessor: 'firstName'
    },
    {
        Header: 'Last Name',
        accessor: 'lastName'
    },
    {
        Header: 'email',
        accessor: 'email'
    },
    {
        Header: 'Phone Number',
        accessor: 'phoneNumber'
    }], []);

    const data = useMemo(
        () => formData.map(
            ({ participantInfo: { firstName, lastName, phoneNumber, email }}) => ({
            firstName,
            lastName,
            phoneNumber,
            email,
    })), []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        selectedFlatRows, // Probably not needed
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { globalFilter }
    } = useTable(
        { columns, data, filterTypes}, 
        useGlobalFilter,
        useExpanded,
        useRowSelect,
        hookFunc
    );

    const downloadForms = useCallback(allForms => {
        // console.log(allForms);
        // selectedFlatRows.map(({ id }) => console.log(formData[id]));
    }, [selectedFlatRows]);

    const downloadSelectedForms = useCallback(() => downloadForms(false), [selectedFlatRows]);
    const downloadAllForms = useCallback(() => downloadForms(true), []);


    const renderExtraRowInfo = useCallback(({ id }) => {
        const {firstName, lastName, email, phoneNumber, ...extraData} = modifyFormData(formData[id])
        return (
            <div>
                <p className='lead mx-1'>Extra Participant Info</p>
                <Table size='sm' className='table'>
                    <tbody>
                        {Object.keys(extraData).map(data => (
                            <tr>
                                <td>{formalizeCamelCaseString(data)}</td>
                                <td>{formalizeCamelCaseString(extraData[data])}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }, [])
    
    return (
        <>
            <Button color='primary' className='m-2' onClick={openModal}>View Participant Forms</Button>
            <Modal autoFocus={false} className='modal' scrollable size='xl' centered keyboard={false} isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Search for a participant form</ModalHeader>
                <ModalBody>
                    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                    <Table className='overflow-auto' {...getTableProps()} hover>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.length ? 
                                rows.map(row => {
                                    const className = row.isSelected ? 'border-left border-info' : null; // Causes small bug where everything shifts right
                                    prepareRow(row);
                                    return (
                                        <Fragment {...row.getRowProps()}>
                                            <tr className={className}>
                                                {row.cells.map(cell => (
                                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                ))}
                                            </tr>
                                            {row.isExpanded ? (
                                                <tr className='bg-secondary'>
                                                    <td colSpan={visibleColumns.length}>
                                                        {renderExtraRowInfo(row)}
                                                    </td>
                                                </tr>
                                            ): null}
                                        </Fragment>
                                    )
                                })
                                :
                                <tr className='bg-secondary'>
                                    <td colSpan={visibleColumns.length}>
                                        <p className='text-center'>There are no forms available to show</p>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                        <Badge color='info' className='mr-auto' pill>{selectedFlatRows.length} forms selected out of {rows.length}</Badge>
                    <Button color='primary' onClick={downloadSelectedForms} outline>Download selected forms</Button>
                    <Button color='primary' onClick={downloadAllForms}>Download all forms</Button>
                </ModalFooter>
            </Modal>
            <style jsx>{`
                .modal {
                    height: 80%;
                }
            `}</style>
        </>
    )
}

export default FormPicker;