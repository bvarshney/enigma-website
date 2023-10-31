
function generateSlug(title) {
  return title.toLowerCase().replace(/[\s\W-]+/, '-');
}

const jobs = [
    {
        id: '1',
        title: 'Web Developer',
        slug: generateSlug('Web Developer'),
        type: 'Development',
        image: 'job1.png',
        sDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        benefits: [
            'Travel allowance',
            'Health benefit',
            'Remote work',
            'Flexible hours'
          ],
        experience: '1-2 years',
        location: 'Noida',
        responsibilities: [
          'Develop and build extremely reliable, scalable and high-performing web applications for our clients',
          'Review and understand business requirements ensuring that development tasks are completed within the timeline provided and that issues are fully tested with minimal defects',
          'Collaborate across the company and interact with our customers to define, design and showcase new concepts and solutions',
          'Collaborate with other developers to ensure that client needs are met at all times',
          'Work in a rapid and agile development process to enable increased speed to market against a backdrop of appropriate controls',
          'Implement good development and testing standards to ensure quality of deliverables'
        ],
        requirements: [
          'Educational Qualification - B.Tech/MCA',
          'Exposure to MVC frameworks like Spring and ORM tool like Hibernate',
          'Excellent understanding of OOPS concepts, microservices and JAVA programming language',
          'Programming experience in relational platforms like MySQL, Oracle. Non-relational platforms like  DynamoDB/MongoDB (no-sql) would be an add on',
          'Knowledge of Javascript, JQuery, HTML, XML would be an added advantage',
        ],
    },
    { 
        id: '2',
        title: 'UI/UX Designer',
        slug: generateSlug('UI/UX Designer'),
        type: 'Design',
        image: 'job2.png',
        sDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        benefits: [
            'Travel allowance',
            'Health benefit',
            'Remote work',
            'Flexible hours'
          ],
        experience: '3-5 years',
        location: 'Delhi',
        responsibilities: [
          'Develop and build extremely reliable, scalable and high-performing web applications for our clients',
          'Review and understand business requirements ensuring that development tasks are completed within the timeline provided and that issues are fully tested with minimal defects',
          'Collaborate across the company and interact with our customers to define, design and showcase new concepts and solutions',
          'Collaborate with other developers to ensure that client needs are met at all times',
          'Work in a rapid and agile development process to enable increased speed to market against a backdrop of appropriate controls',
          'Implement good development and testing standards to ensure quality of deliverables'
        ],
        requirements: [
          'Educational Qualification - B.Tech/MCA',
          'Exposure to MVC frameworks like Spring and ORM tool like Hibernate',
          'Excellent understanding of OOPS concepts, microservices and JAVA programming language',
          'Programming experience in relational platforms like MySQL, Oracle. Non-relational platforms like  DynamoDB/MongoDB (no-sql) would be an add on',
          'Knowledge of Javascript, JQuery, HTML, XML would be an added advantage',
        ],
    },
    {
        id: '3',
        title: 'Marketing Intern',
        slug: generateSlug('Marketing Intern'),
        type: 'Marketing',
        image: 'job3.png',
        sDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        benefits: [
            'Travel allowance',
            'Health benefit',
            'Remote work',
            'Flexible hours'
          ],
        experience: '1-4 years',
        location: 'Noida',
        responsibilities: [
          'Develop and build extremely reliable, scalable and high-performing web applications for our clients',
          'Review and understand business requirements ensuring that development tasks are completed within the timeline provided and that issues are fully tested with minimal defects',
          'Collaborate across the company and interact with our customers to define, design and showcase new concepts and solutions',
          'Collaborate with other developers to ensure that client needs are met at all times',
          'Work in a rapid and agile development process to enable increased speed to market against a backdrop of appropriate controls',
          'Implement good development and testing standards to ensure quality of deliverables'
        ],
        requirements: [
          'Educational Qualification - B.Tech/MCA',
          'Exposure to MVC frameworks like Spring and ORM tool like Hibernate',
          'Excellent understanding of OOPS concepts, microservices and JAVA programming language',
          'Programming experience in relational platforms like MySQL, Oracle. Non-relational platforms like  DynamoDB/MongoDB (no-sql) would be an add on',
          'Knowledge of Javascript, JQuery, HTML, XML would be an added advantage',
        ],
      },
    ];

export default jobs;