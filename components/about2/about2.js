import { useState } from 'react';

const data = [
    {
        "title": "Pioneering Blood Donation",
        "description": "Blood donation is where WE CARE started. Their blood drives save lives and bring hope to many in Bhagalpur. Each donation strengthens the community and proves WE CARE's dedication to health and well-being."
    },
    {
        "title": "A Holistic Approach",
        "description": "WE CARE doesn't just focus on blood donation. They tackle many issues to help the community. From environmental conservation to education, disaster relief to community involvement, WE CARE works tirelessly to address various challenges."
    },
    {
        "title": "Greening Our City",
        "description": "Environmental conservation is a key part of WE CARE's mission. They organize regular tree planting events to beautify Bhagalpur and fight climate change. These efforts have transformed barren areas into green spaces, improving the city's landscape."
    },
    {
        "title": "Empowering Through Education",
        "description": "WE CARE believes education is crucial for a better future. They provide teaching programs and educational workshops to ensure everyone has access to quality education."
    },
    {
        "title": "Standing Tall in Times of Crisis",
        "description": "During crises like the COVID-19 pandemic, WE CARE is a beacon of hope. They provided essential supplies and sanitized public areas, showing the power of compassion in difficult times."
    },
    {
        "title": "A Promise for Tomorrow",
        "description": "WE CARE officially registered on July 5th, 2020. They are committed to expanding their reach and deepening their impact every day. Their mission is to spread kindness and compassion far and wide."
    }
]


const AboutS2 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="image1">
                                <Image src={About1} alt="" />
                            </div>
                            <div className="image2">
                                <Image src={About2} alt="" />
                            </div>
                            <div className="text">
                                <h2>Since</h2>
                                <h3><CountUp end={2018} enableScrollSpy /></h3>
                                <div className="shape">
                                    <Image src={Shape2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="">
                        <div className="right-content">
                            <h2>A Story of Compassion and Unity</h2>
                            <h3> The Founding of WE CARE</h3>
                            <p>In the bustling city of Bhagalpur, amidst the daily hustle and bustle, three friends Nitesh Choubey, Kush Mishra & Yash Choudhary found solace in the act of giving. Their journey began with a simple yet profound realization: the power of blood donation to save lives. Fuelled by compassion and a desire to make a tangible difference, they embarked on a mission to organize a blood donation camp. With their core group of friend- Manish, Goutam, Lav, Sakshi, Suraj, Abhijit, Rishant and Rishu by their side, they set out to turn their vision into reality.</p>
                            <p>
                                On a fateful day, June 24th, their aspirations took flight as 52 generous souls stepped forward to donate blood at their inaugural camp. This monumental event marked the birth of WE CARE-
                                a beacon of hope, compassion, and selflessness in the heart of Bhagalpur. From that moment on, there was no turning back. WE CARE became synonymous with altruism, found a path of service and dedication that would leave an indelible mark on the community.
                            </p>

                            <h4 className=''>
                                A Legacy of Compassion: <h2>WE CARE's Journey</h2>
                            </h4>

                            <p>
                                WE CARE began as a small initiative and has grown into a powerful movement. This organization focuses on helping those in need through acts of kindness. It shows how unity and collective action can make a big difference in people's lives.
                            </p>
                            {
                                data.map((item) => (
                                    <div key={item.title}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            }
                            <div className="about-tab">
                                <div className="tab">
                                    <button className={activeTab === 0 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(0)}>Our Vission</button>
                                    <button className={activeTab === 1 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(1)}>Our Mission</button>
                                </div>
                                <div className={activeTab === 0 ? ' tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <p>
                                            To forge a thriving community in Bhagalpur and its surroundings where every individual, regardless of background, has access to essential resources, opportunities, and support needed to live a healthy, educated, and dignified life.
                                        </p>
                                    </div>
                                </div>
                                <div className={activeTab === 1 ? ' tabcontent active' : 'hidden'}>
                                    <p>
                                        WE CARE is committed to forging positive change in Bhagalpur through comprehensive initiatives in health, education, environment, and social welfare. Our mission is to uplift the underprivileged, protect our environment, and foster community solidarity through:
                                    </p>
                                    <div className="tab-wrap">
                                        <ul>
                                            <li><i className="flaticon-check"></i> Organizing regular blood donation camps to ensure lifesaving blood supplies are readily available.

                                            </li>
                                            <li><i className="flaticon-check"></i>Providing educational support to children in slum areas, empowering them with knowledge and skills for a brighter future.

                                            </li>
                                            <li><i className="flaticon-check"></i>Leading environmental conservation efforts through tree plantation drives and sustainable practices to create healthier living environments.
                                            </li>
                                            <li><i className="flaticon-check"></i>Promoting inclusive celebrations and empowering women through education and skill development.

                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        At WE CARE, we believe in the power of compassion and collective effort to forge lasting change. Join us in our mission to build a more equitable and compassionate world for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutS2;



