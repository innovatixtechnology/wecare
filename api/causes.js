import Cimg1 from '/public/images/causes/1.jpg';
import Cimg2 from '/public/images/causes/2.jpg';
import Cimg3 from '/public/images/causes/3.jpg';
import Cimg4 from '/public/images/causes/4.jpg';
import Cimg5 from '/public/images/causes/5.jpg';
import Cimg6 from '/public/images/causes/6.jpg';

import Csing1 from '/public/images/cause-single/1.jpg'
import Csing2 from '/public/images/cause-single/2.jpg'
import Csing3 from '/public/images/cause-single/3.jpg'
import Csing4 from '/public/images/cause-single/4.jpg'
import Csing5 from '/public/images/cause-single/5.jpg'
import Csing6 from '/public/images/cause-single/6.jpg'

const causes = [
  {
    id: '1',
    title: 'Blood Donation & Health Camps',
    subtitle: 'Saving Lives, Improving Community Health',
    docomunt:
      'We organize regular blood donation drives and health camps across Bihar to ensure access to essential healthcare for those in need.',
    slug: 'blood-donation-health-camps',
    Cimg: Cimg1,
    CSimg: Csing1,
    location: 'Bihar, India',
    date: '15 Dec 2025',
    tag: 'Health',
    progress: 70,
    goal: 50000,
    raised: 35000,
    targetGoal: 50000,
  },
  {
    id: '2',
    title: 'Paathshala: Udaan Hausloon Ki',
    subtitle: 'Education That Empowers Futures',
    docomunt:
      'We provide free education, mentorship, and continuous support to underprivileged children, empowering them with knowledge and confidence.',
    slug: 'paathshala-udaan-hausloon-ki',
    Cimg: Cimg2,
    CSimg: Csing2,
    location: 'Bihar, India',
    date: '10 Jan 2026',
    tag: 'Education',
    progress: 85,
    goal: 60000,
    raised: 51000,
    targetGoal: 60000,
  },
  {
    id: '3',
    title: 'Food & Essential Support',
    subtitle: 'Dignity Through Basic Needs',
    docomunt:
      'We distribute food, groceries, and daily necessities to families and individuals facing hardship.',
    slug: 'food-essential-support',
    Cimg: Cimg3,
    CSimg: Csing3,
    location: 'Bihar, India',
    date: '05 Feb 2026',
    tag: 'Food',
    progress: 60,
    goal: 40000,
    raised: 24000,
    targetGoal: 40000,
  },
  {
    id: '4',
    title: 'Flood & Emergency Relief',
    subtitle: 'Standing Strong in Times of Crisis',
    docomunt:
      'We support communities affected by floods and emergencies by delivering timely relief, essential supplies, and rehabilitation assistance.',
    slug: 'flood-emergency-relief',
    Cimg: Cimg4,
    CSimg: Csing4,
    location: 'Flood-Affected Areas, Bihar',
    date: '20 Aug 2025',
    tag: 'Disaster Relief',
    progress: 90,
    goal: 80000,
    raised: 72000,
    targetGoal: 80000,
  },
  {
    id: '5',
    title: 'Environment & Cleanliness Drives',
    subtitle: 'Building a Greener Tomorrow',
    docomunt:
      'We promote cleanliness, tree plantation, and environmental awareness to create a healthier and sustainable environment.',
    slug: 'environment-cleanliness-drives',
    Cimg: Cimg5,
    CSimg: Csing5,
    location: 'Bihar, India',
    date: '05 Jun 2025',
    tag: 'Environment',
    progress: 50,
    goal: 30000,
    raised: 15000,
    targetGoal: 30000,
  },
  {
    id: '6',
    title: 'Community Welfare Initiatives',
    subtitle: 'Uplifting Communities Together',
    docomunt:
      'We support people in need through healthcare assistance, awareness programs, and impactful social initiatives.',
    slug: 'community-welfare-initiatives',
    Cimg: Cimg6,
    CSimg: Csing6,
    location: 'Bihar, India',
    date: '01 Mar 2026',
    tag: 'Community',
    progress: 75,
    goal: 45000,
    raised: 33750,
    targetGoal: 45000,
  },
];

export default causes






