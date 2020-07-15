import React, {Fragment} from "react";
import Text from "./components/Text";

const history = [
  {
    title: 'Started Tertiary Education',
    date: 'Jan 2010',
    description: (
        <Fragment>
          <Text>Bachelor of Multimedia (Games and Interactivity) / Bachelor of Science (Computer Science and Software Engineering) </Text>
          <Text>Swinburne University</Text>
        </Fragment>
    ),
    timelineColor: '',
    icon: 'https://imgur.com/teYoGxR.jpg'
  },
  {
    title: 'Become co-founder of the Swinburne Game Jam',
    date: 'Feb 2012',
    description: (
        <Text>
          Organised the first ever Swinburne Student Game Jam competition.
          It involved organising upwards of 30 students to participate in an intense 48 hour competition where they develop a game from scratch based on a shared theme.
          Judges from the industry were brought in to help judge the competition.
          This remains a staple event at the university to this day.
        </Text>),
    timelineColor: '',
    icon: ''
  },
  {
    title: 'Joined ObjectMastery as an IBL student',
    date: 'July 2014',
    description: (
        <Text>
          Joined ObjectMastery (<a href="https://www.integradev.com.au/">now IntegraDev</a>) as an IBL (Industry Based Learning) student as part of my coursework at Swinburne University.
          This was an optional year of learning on the job for high performing students.
        </Text>),
    timelineColor: '#def',
    icon: 'https://i.imgur.com/PGyQesc.png'
  },
  {
    title: 'Developer at ObjectMastery',
    date: 'July 2015',
    description: (
        <Text>
          After my initial IBL term with ObjectMastery they kept me on part-time as I completed my degree.
          I was involved in the ongoing development and maintenance of a financial wrap service.
          The majority of my time was focused on an internal facing desktop application that handled:
          <ul>
            <li>Trading of stocks and shares</li>
            <li>Investment portfolios</li>
            <li>Administration of pensions</li>
          </ul>
          In this role I developed largely in Delphi and Javascript, integrating with Postgres and a few proprietary data storage formats.
        </Text>),
    timelineColor: '#def',
    icon: ''
  },
  {
    title: 'Gained Bachelor of Multimedia / Bachelor of Science',
    date: '2016',
    description: (<Text>Finished my double degree of Bachelor of Multimedia (Games and Interactivity) / Bachelor of Science (Computer Science and Software Engineering) at Swinburne University</Text>),
    timelineColor: '',
    icon: 'https://imgur.com/teYoGxR.jpg'
  },
  {
    title: 'Developer at Alex Solutions',
    date: 'May 2016',
    description: (
        <Fragment>
          <Text>
            I began work at Alex Solutions as a full stack developer.
            I worked on a suite of metadata management products that allowed customers to scrape their existing data environments to gain a catalogue of their data assets.
          </Text>
          <Text>I worked in Java, Scala, HOCON and SQL. I developed integrations with a great number of technologies; Oracle, MySQL, Postgres, Teradata, S3, SAP and more.</Text>
        </Fragment>
    ),
    timelineColor: '#f05724',
    icon: 'https://i.imgur.com/Wq8Zr1u.png'
  },
  {
    title: 'Senior Developer at Alex Solutions',
    date: 'Dec 2016',
    description: (
        <Text>
          I worked on a group of analytic tools to enhance the base Alex metadata management suite.
          This involved scanning customer data assets for PII, PCI and PHI, as well as collecting statistical metadata intended to help data scientists locate and remediate pain points in their data landscape.
          Basically I created a bunch of tools to help companies find PII data they had lost track of, or identify where they had really bad data that was driving their core decision making processes.
        </Text>
    ),
    timelineColor: '#f05724',
    icon: ''
  },

  {
    title: 'Head of Analytics & Machine Learning',
    date: 'Jun 2017',
    description: (
        <Text>
          Began work on creating Neural Nets that could predict the type of information stored in data warehouses based on simple metadata tags.
        </Text>
    ),
    timelineColor: '#f05724',
    icon: ''
  },
];

export default history;