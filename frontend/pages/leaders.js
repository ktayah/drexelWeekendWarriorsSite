import Layout from '../components/Layout';
import React from 'react';
import {
  CardDeck, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const leaders = () => {

    return (
        <Layout activePage='leaders'>
            <div className="container" >
                <br />
                <h1 className='alert alert-dark display-5 rounded shadow-lg text-center p-3 mx-5'>Meet The Leaders</h1>
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/MichaelKanner.jpg/' />
                        <CardBody>
                        <CardTitle>Michael Kanner</CardTitle>
                        <CardSubtitle>President</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking/backpacking, road and mountain biking, bikepacking/touring, skiing, trail running, waterskiing, whitewater kayaking, climbing
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            This one time I went to sleep
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AdamPieroni.jpg' />
                        <CardBody>
                        <CardTitle>Adam Pieroni</CardTitle>
                        <CardSubtitle>Vice President</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, Cycling, Sailing, Pioneering and Going to the Bathroom in the Woods   
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I know many different way to go to the bathroom in the woods. Some involve friends. Some involve a lot of core strength. 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AlexHeiman.jpg' />
                        <CardBody>
                        <CardTitle>Alex Heiman</CardTitle>
                        <CardSubtitle>Secretary</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, Mountain Biking, Skiing 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I could not make it. I just had to number two. Above treeline too. ... Did I say I was good at haikus?
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src="/images/leaders/HarrisonLo.jpg/"/>
                        <CardBody>
                        <CardTitle>Harry Lo</CardTitle>
                        <CardSubtitle>Tresurer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Snowboarding
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I have never been able to solve a rubix cube :(
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="/images/leaders/SarahScanlin.JPG/"/>
                        <CardBody>
                        <CardTitle>Sarah Scanlin</CardTitle>
                        <CardSubtitle>Outreach Officer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            I love to hike, ski, kayak, sail, bike, run (if that counts) lol there's definitely a few more that I'm forgetting.
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I missed a week of school to go to Scotland & compete in the All Scotland Championships for Irish Dance this past fall.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="/images/leaders/MadiRockett.jpg/" />
                        <CardBody>
                        <CardTitle>Madi Rockett</CardTitle>
                        <CardSubtitle>On-Campus Officer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, camping, backpacking, climbing, swimming, surfing, paddle boarding, jumping off high things
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I can’t straighten my pinkies 
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src="/images/leaders/AndrewKigara.jpg/" />
                        <CardBody>
                        <CardTitle>Andrew Kigara</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking and Photography
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            One of my professional pictures almost made it to a Vogue blog
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/GarrettWhite.jpg/' />
                        <CardBody>
                        <CardTitle>Garrett White</CardTitle>
                        <CardSubtitle>Quarter Master</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Walking and making smore's
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I have eaten 4 rocks
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="/images/leaders/KatieEuting.jpg/" />
                        <CardBody>
                        <CardTitle>Kate Euting</CardTitle>
                        <CardSubtitle>Graphic Designer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking and Camping
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I'm still afraid of the dark.
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src="/images/leaders/MatthewHein.jpg/" />
                        <CardBody>
                        <CardTitle>Matthew Hein</CardTitle>
                        <CardSubtitle>Fundraising Chair</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, Backpacking, Kayaking
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I like soccer.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AdamBengis.jpg' />
                        <CardBody>
                        <CardTitle>Adam Bengis</CardTitle>
                        <CardSubtitle>Former Vice President</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Backpacking, hiking, kayaking
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I've never seen a bear in person
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/ClaraFancher.png' />
                        <CardBody>
                        <CardTitle>Clara Fancher</CardTitle>
                        <CardSubtitle>Former Secretary</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            I am an avid water person - I wakeboard, white water kayak, paddleboard, sail, and row. Also, I love backpacking with my dog, Butter
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            My parents have named all of their pets after flowers. Also, my middle name is Rose. So I am a pet. I have continued the tradition by naming my dog Buttercup. 
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/EvelynnOuellette.jpg/' />
                        <CardBody>
                        <CardTitle>Evelynn Ouellette</CardTitle>
                        <CardSubtitle>Former On-Campus Officer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Pretty good at walking, occasionally able to ski, can swim (There should be a section for certifications if we can't include them here!)
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I've never been stung by a bee, but I'm the reason why multiple other people have been stung by bees
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AnikaArose.jpg' />
                        <CardBody>
                        <CardTitle>Anika Arose</CardTitle>
                        <CardSubtitle>Former Outreach Officer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, kayaking, backpacking, WFA certified 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            Geese are my favorite animals, they are hilarious, just think about it 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/KevinTayah.jpg' />
                        <CardBody>
                        <CardTitle>Kevin Tayah</CardTitle>
                        <CardSubtitle>Former IT Officer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Rock Climbing and Slacklining 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I make a hobby of falling repeatedly
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/TobyGreen.jpg/' />
                        <CardBody>
                        <CardTitle>Tobius Green</CardTitle>
                        <CardSubtitle>Former Treasurer</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            In the Boy Scouts for 7.5 years, where I got Eagle Scout.  WFA trained. Avid backpacker and sailor
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            The best part of backpacking for a week other than the views, is the shower when you get back to civilisation.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/MaryGraceCornell-Combs.jpg/' />
                        <CardBody>
                        <CardTitle>Mary Grace Cornell-Combs</CardTitle>
                        <CardSubtitle>Former Social Media Chair</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Backpacking, firebuilding, and kayaking
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            My dream is to have a cheese picnic on the moon with Wallace and Gromit.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AdyTibrewal.jpg/' />
                        <CardBody>
                        <CardTitle>Ady Tibrewal</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Rock climbing, Kayaking, scuba diving, Canoeing, etc.. 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            There is a planet 40 light years away that is completely made of Diamond and Geaphite
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AnnaKloiber.jpg/' />
                        <CardBody>
                        <CardTitle>Anna Kloiber</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Skiing, hiking, kayaking, horseback riding, rock climbing 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            Ice cream aficionado 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/AnnaYounger.jpg/' />
                        <CardBody>
                        <CardTitle>Anna Younger</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, backpacking, gardening
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I was actually homeschooled for a lot of grade school! 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/FrancescaBottini.jpg/' />
                        <CardBody>
                        <CardTitle>Francesca Bottini</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Waterfront lifeguarding, kayaking, canoeing, admiring plants and animals (but rarely identifying them correctly)
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I picture whatever god exists as looking like Morgan Freeman because of that 2007 movie Evan Almighty
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/GavBlaxberg.jpg/' />
                        <CardBody>
                        <CardTitle>Gav Blaxberg</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Rock climbing, hiking, kayaking
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I won a government election in Philadelphia by writing in my own name (it's true google my name)
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/GrantFarabaugh.jpg/' />
                        <CardBody>
                        <CardTitle>Grant Farabaugh</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Skiing, Climbing, Backpacking
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            The terminal velocity of an ant is low enough that you can drop it from any height and it won’t die from the impact.
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/GwendolynYaeger.jpg/' />
                        <CardBody>
                        <CardTitle>Gwen Yaeger</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            WFA trained, whitewater raft guide, bouldering, kayaking, trips over flat surfaces
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I once dislocated my shoulder by rolling over on the couch!
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/JanaLenart.jpg/' />
                        <CardBody>
                        <CardTitle>Jana Lenart</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, backpacking, walking extensive distances 
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            My toes are so ridiculously long that I can grasp and turn door knobs with them without a problem. 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/JustinKalan.jpg/' />
                        <CardBody>
                        <CardTitle>Justin Kalan</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Knots, Lashings, Firebuilding, Orienteering, Shelter Building
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I can do a pretty accurate Gollum voice
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/KerryMurphy.jpg/' />
                        <CardBody>
                        <CardTitle>Kerry Murphy</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, yoga
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            Can do a backflip but trips walking up a flight of stairs. 
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
                <CardDeck className="text-center">
                    <Card>
                        <CardImg variant="top" src='/images/leaders/MiguelFerrer.jpg/' />
                        <CardBody>
                        <CardTitle>Miguel Ferrer</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Climbing, hiking, wilderness first aid,
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I can eat mountains of white rice. 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/SusanDalton.jpg/' />
                        <CardBody>
                        <CardTitle>Susan Dalton</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Wilderness First Aid Certified, CPR Certified, terrain navigator guru, champion of “rip the bandaid” when it comes to something new
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I love frozen waffles. Toasters are not necessary. 
                        </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg variant="top" src='/images/leaders/TylerRehak.jpg/' />
                        <CardBody>
                        <CardTitle>Tyler Rehak</CardTitle>
                        <CardSubtitle>Trip Leader</CardSubtitle>
                        <br />
                        <CardSubtitle>Outdoor Skills</CardSubtitle>
                        <CardText className="text-black-50">
                            Hiking, camping, biking, climbing, baseball, WFA
                        </CardText>
                        {/* <br /> */}
                        <CardSubtitle>Fun Fact</CardSubtitle>
                        <CardText className="text-black-50">
                            I once [REDACTED] while [REDACTED] in [REDACTED].
                        </CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
            </div>
            
        </Layout>
    )
}


export default leaders;