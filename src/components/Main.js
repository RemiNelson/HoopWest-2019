import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" id="friday-top">Friday</h2>
          <h3>Jump to:</h3>
            <div className="flex">
              <div className="time-link"><a href="#4">4:00</a></div>
              <div className="time-link"><a href="#5">5:00</a></div>
              <div className="time-link"><a href="#5-30">5:30</a></div>
              <div className="time-link"><a href="#6-30">6:30</a></div>
              <div className="time-link"><a href="#7-45">7:45</a></div>
              <div className="time-link"><a href="#9">9:00</a></div>
            </div>
            <br />
          <div className="flex">
            <div className="column">
              <div className="title"><h2>Upstairs</h2></div>
            </div>
            <div className="column">
              <div classname="title"><h2>Downstairs</h2></div>
            </div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="4"><h3>4:00</h3></div>
            <p>Doors Open, Registration Begins</p>
            <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
          <div className="time-label" id="5"><h3>5:00</h3></div>
          <p>Opening Circle</p>
          <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="5-30"><h3>5:30</h3></div>
            <p>Ecstatic Dance with Baxter</p>
            <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="6-30"><h3>6:30</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Legstravaganza!</h3></div>
              <em><b>Kelly James</b></em>
              <p>
                <em>Beginner-Intermediate</em>
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>(Behind the) Back at it</h3></div>
              <em><b>Karla Snow</b></em>
              <p>
                We’ll play with a number of “yeah you did!” moves performed behind the back, utilizing rolls, catches, jumps, and tosses, and we’ll take those badass moves and combine them into some fun combinations to incorporate into your flow. This is an all-levels class with lots of variations to challenge you wherever you are in your hoop practice.
              </p>
            </div>
            <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="7-45"><h3>7:45</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Overcoming Performance Anxiety</h3></div>
              <em><b>Axis D'Evil</b></em>
              <br/>
              <em>How to get out of your head, into your hoop and stay present during your performances.</em>
              <p>
                This workshop will cover techniques for developing an engaging and dynamic on stage persona- amplifying your own best qualities and connecting more deeply with your audience. It can be daunting to get up and dance in front of others, especially when there is a hoop-shaped physical barrier between you and the people you have come to entertain. We will play with activities designed to help you improve eye contact, hold power in stillness, and identify unique personal traits to heighten & translate into your movement vocabulary. Axis will also share ways to manage pre-show jitters and take attendees through a favourite warm up routine that can be done in even the tightest of backstage spaces. If you are a seasoned performer, a complete ingenue, or someone who simply prefers to perform for their cats- this workshop will give you permission to take up space and be your most authentic self. Students should bring a notebook and pen for some brainstorming.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Noodles & Noggins</h3></div>
              <em><b>Geoffrey Szuszkiewicz</b></em>
              <p>
                This workshop will focus on dance movements while core hooping. I am inspired by vogue and will be introducing a couple of basic concepts of vogue dance that we can play with. We will do a lot of body rocking on the core, with a focus on waist, shoulders and head hooping, different arm positions and playing with negative space around the hoop. Please bring a hoop you feel comfortable using for on-body hooping.
              </p>
            </div>
            <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="9"><h3>9:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Reel Whirled</h3></div>
              <em><b>Karrie Blackburn</b></em>
              <p>
                The ins and outs of the Mobius Loop, an infinity chest roll variation, set between reels, twirls, and transitions.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Big Bumps and Tricky Tosses</h3></div>
              <em><b>Miss Mad About Hoops</b></em>
              <p><em>Beginner to Intermediate</em></p>
              <p>
                Bumps and tosses are a combination I use a lot in my flow. In this workshop, we will start with simple moves like infinity tosses, knee bumps, k rolls and then advance the moves by adding some together! Some of these hoop tricks will involve infinity tosses to wedgies and the knee bump to head toss! This is an all levels class, we will start off small and then get harder as we progress.
              </p>
            </div>
            <div  className="to-top"><a href="#friday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" id="saturday-top">Saturday</h2>
          <h3>Jump to:</h3>
            <div className="flex">
              <div className="time-link"><a href="#9-00-sat">9:00am</a></div>
              <div className="time-link"><a href="#10-00-sat">10:00am</a></div>
              <div className="time-link"><a href="#11-15-sat">11:15am</a></div>
              <div className="time-link"><a href="#1-30-sat">1:30pm</a></div>
              <div className="time-link"><a href="#2-45-sat">2:45pm</a></div>
              <div className="time-link"><a href="#4-00-sat">4:00pm</a></div>
              <div className="time-link"><a href="#5-15-sat">5:15pm</a></div>
              <div className="time-link"><a href="#5-30-sat">5:30pm</a></div>
              <div className="time-link"><a href="#7-00-sat">7:00pm</a></div>
              <div className="time-link"><a href="#8-00-sat">8:00pm</a></div>
            </div>
            <br />
          <div className="flex">
            <div className="column">
              <div className="title"><h2>Upstairs</h2></div>
            </div>
            <div className="column">
              <div classname="title"><h2>Downstairs</h2></div>
            </div>
          </div>
          <div className="time-label" id="9-00-sat"><h3>9:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Yoga</h3></div>
              <p><em><b>Kimberly Ilott</b></em></p>
            </div>
            <div className="column">
              <div className="title"><h3>Open flow space</h3></div>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="10-00-sat"><h3>10:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Drop it like it's squat</h3></div>
              <em><b>Mo Bot</b></em>
              <br/>
              <p>
                Did you know that our ankle, knee, and hip mobility are all closely linked? We will explore this connection through movement exercises designed to test the range of motion, stability and resiliency of these key joint complexes. Working with the glorious squat, we’ll play with many pathways of gettin’ down to the floor and back up again with grace, ease, and fluidity. Opportunities to integrate movements with props will be provided. Choose your own adventure and bring any prop you’d like to incorporate more floor work with.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Sandwiches & Step Throughs</h3></div>
              <em><b>Babz Robinson</b></em>
              <p>
              </p>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="11-15-sat"><h3>11:15</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Legstravaganza!</h3></div>
              <em><b>Kelly James</b></em>
              <p>
                <em>Intermediate-Advanced</em>
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>let's get hoop tech</h3></div>
              <em><b>Dizzy Dynamic</b></em>
              <p>
                Combos, coinflips, wedgies & more! This workshop is a fun variety of on and off body hoop tech. We will cover some of my favorite transitions and variations and learn how to make them into some killer combos. Come prepared to learn coinflips, bodyrolls, wedgies & folds! Best hoop sizes to use for this workshop is d 66-84 cm (26-33inch ) Hoops.
              </p>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="1-30-sat"><h3>1:30</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Silk Fans</h3></div>
              <em><b>Cleo Lunette</b></em>
              <p>
                A silky experience with my favorite dance prop. We will begin with prop care, standard and alternative grip techniques, single, closed, open, double style and tosses with long silk veil fans. We’ll flow through a full range of moves, try some fun partner moves, layering and group patterns with tunnels. (Photo op!) We’ll finish up with fan voi: using fans as poi!
              </p>
              <p>
                Limited number of fans provided, or bring your own, some may be available for purchase.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>let's get hoop tech</h3></div>
              <em><b>Dizzy Dynamic</b></em>
              <p>
                Combos, coinflips, wedgies & more! This workshop is a fun variety of on and off body hoop tech. We will cover some of my favorite transitions and variations and learn how to make them into some killer combos. Come prepared to learn coinflips, bodyrolls, wedgies & folds! Best hoop sizes to use for this workshop is d 66-84 cm (26-33inch ) Hoops.
              </p>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="2-45-sat"><h3>2:45</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Double Down</h3></div>
              <em><b>Ohmega</b></em>
              <br/>
              <p>
                This all-levels workshop will introduce two different concepts to elevate your doubles practice! First, we will explore patterns that incorporate isolations. These concepts combine what you are familiar with in your single hoop practice and make an accessible repertoire that becomes a starting point to explore different transitions and patterns. Second, we will learn the basics of the ocho grip, aka infinity style hooping. This alluring set of patterns is a great starting point for those that are new to double hoops and adds sass to your already existing flow. Come double down and level up your hoop practice!
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Core Flow</h3></div>
              <em><b>Baxter</b></em>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="4-00-sat"><h3>4:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>It's All About Balance</h3></div>
              <em><b>Geoffrey Szuszkiewicz</b></em>
              <p>
                This workshop will focus primarily on hoop balance on the hands. It will be a difficult workshop, perhaps aspirational for many, but I hope to distill a series of drills that participants can work with, in their free time, to improve hand balance. For the basics, we will cover: palm spins/finger spins and palm balance. The more advanced drills will cover: finger balance, and back of the hand balance, while turning and while walking. The drills, when practiced regularly, give us more control and allow us to find new expansions of movement in a technique that often seems static. Please bring a hoop that isn’t too heavy and that you feel comfortable using for off body and balance exploration.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Hoop DANCE</h3></div>
              <em><b>Wolf Flow</b></em>
            </div>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="5-15-sat"><h3>5:15</h3></div>
            <p>Group Photo</p>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
          <div className="time-label" id="5-30-sat"><h3>5:30</h3></div>
          <p>Supper Break</p>
          <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="7-00-sat"><h3>7:00</h3></div>
            <p>Cabaret doors open - Sip and shop the marketplace</p>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="8-00-sat"><h3>8:00</h3></div>
            <p>Cabaret</p>
            <div  className="to-top"><a href="#saturday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" id="sunday-top">Sunday</h2>
          <h3>Jump to:</h3>
            <div className="flex">
              <div className="time-link"><a href="#10-00-sun">10:00am</a></div>
              <div className="time-link"><a href="#11-00-sun">11:00am</a></div>
              <div className="time-link"><a href="#1-15-sun">1:15pm</a></div>
              <div className="time-link"><a href="#2-30-sun">2:30pm</a></div>
              <div className="time-link"><a href="#3-45-sun">3:45pm</a></div>
              <div className="time-link"><a href="#5-00-sun">5:00pm</a></div>
            </div>
            <br />
          <div className="flex">
            <div className="column">
              <div className="title"><h2>Upstairs</h2></div>
            </div>
            <div className="column">
              <div classname="title"><h2>Downstairs</h2></div>
            </div>
          </div>
          <div className="time-label" id="10-00-sun"><h3>10:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Yoga</h3></div>
              <p><em><b>Kelly Janes</b></em></p>
            </div>
            <div className="column">
              <div className="title"><h3>Open flow space</h3></div>
            </div>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="11-00-sun"><h3>11:00</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Enter the vortex</h3></div>
              <em><b>Carla Snow</b></em>
              <br/>
              <p>
                We’re going to examine the spiraling beauty of a vortex and spin it into a number of variations, bending planes and melting brains.  This is a multilevel class and we’ll be layering on the difficulty as we go, so don’t be shy, let’s go for a twirl! Bring your favourite hoop for both on and off-body.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Let's Get Contactual</h3></div>
              <em><b>Taylor Flows</b></em>
              <p>
              </p>
            </div>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="1-15-sun"><h3>1:15</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Let's Get Contactual</h3></div>
              <em><b>Taylor Flows</b></em>
              <p>
                
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Tricky Tosses with Doubles</h3></div>
              <em><b>Miss Mad About Hoops</b></em>
              <p><em>Intermediate to Advanced</em></p>
              <p>
                Get ready to have your brain melted! In this class, you should already have a knowledge of some tosses like, the pizza toss and infinity tosses. During this workshop, we will combine those moves with two hoops. What can you expect to learn? Continuous double infinity tosses, double pizza tosses, infinity toss to iso flower, continuous head toss, infinity toss to wedgie (while controlling another hoop), reverse hand roll toss on wall plane and linear plane AND SO MUCH MORE!
              </p>
            </div>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="2-30-sun"><h3>2:30</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Slow Mo Shoulder Flow</h3></div>
              <em><b>HooperSonic</b></em>
              <p>
                I love big hoops! Mostly for that sweet, buttery slow mo, shoulder flow. (Say that with some sass!)
              </p>
              <p>
                This workshop focuses on techniques to allow more DANCING while shoulder/chest hooping. We also explore creative ways to move your arms and make shoulder hooping a full body experience.
              </p>
              <p>
                I offer tips and techniques to make shoulder hooping while turning look graceful, and general troubleshooting on angled shoulder hooping, static shoulder, etc.
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Break it until you make it</h3></div>
              <em><b>Danielle Lee</b></em>
              <p><em>Class Level: intermediate</em></p>
              <p><em>Prerequisites: waist hooping is a must, and having experience in shoulder hooping is helpful</em></p>
              <p>
                Breaks are an excellent way to add rhythm and punctuation to your hoop movement. Whether you are just beginning to find break points and want a solid foundation, or are a break collector like Danielle, this workshop will tighten up your technique and leave you with new ways to send the hoop in the opposite direction.
              </p>
            </div>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="time-label" id="3-45-sun"><h3>3:45</h3></div>
          <div className="timeslot flex">
            <div className="column">
              <div className="title"><h3>Circus Centre</h3></div>
              <em><b>Amanda Panda</b></em>
              <br/>
              <p>
                Let us put the hula hoops down just for a moment. In this Circus Centre workshop we are going to go wild with spinning plates and juggling props (scarves and balls) so you can level up your skills in more ways than one. Want to huggle? Hula hoop + juggle! It’s a thing! And you can learn it here!
              </p>
            </div>
            <div className="column">
              <div className="title"><h3>Baxter</h3></div>
              
            </div>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          <div className="timeslot">
            <div className="time-label" id="5:00-sun"><h3>5:00</h3></div>
            <p>Group Photo & Closing Jam</p>
            <div  className="to-top"><a href="#sunday-top"><span className="icon fa-angle-double-up"></span></a></div>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
