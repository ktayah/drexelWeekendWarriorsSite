import React, { useState, useCallback, useMemo, forwardRef, useRef, useEffect, Fragment } from 'react';
import { Badge, Modal, ModalHeader, Button, ModalBody, ModalFooter, Table, InputGroupAddon, InputGroup, InputGroupText, Input } from 'reactstrap';
import {  
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    useExpanded,
    useRowSelect 
} from 'react-table';
import { formalizeCamelCaseString } from '../utils/formUtils';
import moment from 'moment';

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

const FormPicker = () => {
// const FormPicker = ({ formData }) => { // Faking formData for now
    const [modalOpen, setModalOpen] = useState(true);
    const [selectedFormIds, setSelectedFormIds] = useState([])
    const [searchValue, setSearchValue] = useState('');
    
    const openModal = useCallback(() => setModalOpen(true), [modalOpen]);
    const toggleModal = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);

    // const downloadForm = () => {

    // };

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

    const formData = [{
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Phil',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }, {
        participantInfo: {
            firstName: 'Chris',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: 2675467901,
            someData: 'someData',
            someMoreData: 'someMoreData'
        },
        medicalInfo: {
            insuranceNumber: 123456,
            sex: 'male'
        }
    }]

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
        state: { selectedRowIds, expanded }
    } = useTable(
        { columns, data}, 
        useExpanded,
        useRowSelect, 
        hookFunc
    );

    const renderExtraRowInfo = useCallback(({ id }) => {
        const { participantInfo, medicalInfo } = formData[id];
        const {firstName, lastName, email, phoneNumber, ...extraParticipantData} = participantInfo
        const extraData = Object.assign(extraParticipantData, medicalInfo);
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
                    <InputGroup className='mb-2'>
                        <InputGroupAddon addonType='prepend'>
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            type='text'
                            placeholder='Search for a item by name, phone number, or email'
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </InputGroup>
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
                            {rows.map((row, i) => {
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
                            })}
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Badge color='info' className='mx-2' pill>{selectedFlatRows.length} forms selected</Badge>
                    <Button color='primary' outline>Download selected forms</Button>
                    <Button color='primary'>Download all forms</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default FormPicker;