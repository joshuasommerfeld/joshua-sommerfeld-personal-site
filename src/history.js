import React, {Fragment} from "react";
import Text from "./components/Text";

const history = [
  {
    title: 'Started Tertiary Education',
    date: 'Jan 2010',
    description: (
        <Fragment>
          <Text>Bachelor of Multimedia (Games and Interactivity) / Bachelor of Science (Computer Science and Software
            Engineering) </Text>
          <Text>Swinburne University</Text>
        </Fragment>
    ),
    timelineColor: '',
    icon: 'https://imgur.com/teYoGxR.jpg'
  },
  {
    title: 'Co-founder of the Swinburne Game Jam',
    date: 'Feb 2012',
    description: (
        <Text>
          Organised the first ever Swinburne Student Game Jam competition.
          It involved organising upwards of 30 students to participate in an intense 48 hour competition where they
          develop a game from scratch based on a shared theme.
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
          Joined ObjectMastery (<a href="https://www.integradev.com.au/">now IntegraDev</a>) as an IBL (Industry Based
          Learning) student as part of my coursework at Swinburne University.
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
          In this role I developed largely in Delphi and Javascript, integrating with Postgres and a few proprietary
          data storage formats.
        </Text>),
    timelineColor: '#def',
    icon: ''
  },
  {
    title: 'Gained Bachelor of Multimedia / Bachelor of Science',
    date: 'Feb 2016',
    description: (
        <Text>Finished my double degree of Bachelor of Multimedia (Games and Interactivity) / Bachelor of Science
          (Computer Science and Software Engineering) at Swinburne University</Text>),
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
            I worked on a suite of metadata management products that allowed customers to scrape their existing data
            environments to gain a visually explorable catalogue of their data assets.
          </Text>
          <Text>I worked in Java, Scala, Neo4j (CQL) and SQL. I developed integrations with a great number of
            technologies; Oracle, MySQL, Postgres, Teradata, S3, SAP and more.</Text>
        </Fragment>
    ),
    timelineColor: '#f05724',
    icon: 'https://i.imgur.com/Wq8Zr1u.png'
  },
  {
    title: 'Senior Developer at Alex Solutions',
    date: 'Dec 2016',
    description: (
        <Fragment>
          <Text>
            I worked on a group of analytic tools to enhance the base Alex metadata management suite.
            This involved scanning customer data assets for PII, PCI and PHI, as well as collecting statistical metadata
            intended to help data scientists locate and remediate pain points in their data landscape.
          </Text>
          <Text>
            Basically I created a bunch of tools to help companies find PII data they had lost track of, or identify
            where they had really bad data that was driving their core decision making processes.
          </Text>
        </Fragment>
    ),
    timelineColor: '#f05724',
    icon: ''
  },
  {
    title: 'Head of Analytics & Machine Learning',
    date: 'Jun 2017',
    description: (
        <Fragment>
          <Text>Began work on creating Neural Nets that could predict the type of information stored in data warehouses
            based on scraped and derived metadata.</Text>
          <Text>
            These models were primarily used to perform sweeps of data warehouses to discover potential sources of PII
            that were improperly stored before the Australian Privacy Principles came into effect.
            These cleanup activities were undertaken on site for several clients of Alex Solutions.
          </Text>
        </Fragment>
    ),
    timelineColor: '#f05724',
    icon: ''
  },
  {
    title: 'Developer at REA',
    date: 'Sep 2018',
    description: (
        <Text>Began work as a full stack developer with REA Group. I worked on the "agent match" suite of products
          aiming to match property vendors with the perfect real esate agent.</Text>
    ),
    timelineColor: '#e4002b',
    icon: 'https://i.imgur.com/ppD0MCPm.png'
  },
  {
    title: 'Senior Developer at REA',
    date: 'July 2019',
    description: (
        <Text>Was promoted to senior developer at REA Group. My responsibilities grew to include data analytics and OKR
          data monitoring. I also began working in the ratings and reviews space for realestate.com.au</Text>
    ),
    timelineColor: '#e4002b',
    icon: ''
  },
];

export default history;