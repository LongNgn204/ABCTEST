import type { ReadingArticle, ListeningExercise } from './types';

interface ContentLibrary {
    reading: ReadingArticle[];
    listening: ListeningExercise[];
}

export const CONTENT_LIBRARY: ContentLibrary = {
    reading: [
        {
            id: 'a2-daily-routine',
            title: 'My Daily Routine',
            level: 'A2',
            content: `My name is Alex, and I am a student. Every morning, I wake up at 7:00 AM. I brush my teeth and wash my face. Then, I have breakfast with my family. I usually eat bread and drink milk.
After breakfast, I get dressed and go to school by bus. My classes start at 8:30 AM. I study many subjects like Math, English, and Science. My favorite subject is English.
I finish school at 4:00 PM. When I get home, I do my homework. In the evening, I have dinner with my family, and we talk about our day. Before I go to bed, I like to read a book. I usually go to sleep at 10:00 PM.`,
            questions: [
                {
                    question: 'What time does Alex wake up?',
                    options: ['7:30 AM', '7:00 AM', '8:00 AM', '8:30 AM'],
                    answer: '7:00 AM',
                },
                {
                    question: 'How does Alex go to school?',
                    options: ['By car', 'By bike', 'He walks', 'By bus'],
                    answer: 'By bus',
                },
                {
                    question: 'What does Alex do before going to bed?',
                    options: ['Watch TV', 'Play games', 'Read a book', 'Listen to music'],
                    answer: 'Read a book',
                },
            ],
        },
        {
            id: 'b1-remote-work',
            title: 'The Rise of Remote Work',
            level: 'B1',
            content: `In recent years, working from home, also known as remote work, has become much more common. Many companies now allow their employees to work from outside the office. This change is largely due to improvements in technology. With a reliable internet connection, people can easily communicate with their colleagues and access company files from anywhere.
There are several advantages to remote work. Employees often have a more flexible schedule and can save time and money by not commuting. However, there are also disadvantages. Some people feel isolated when they don't see their coworkers every day. It can also be difficult to separate work life from home life. Companies need to find a good balance to make remote work successful.`,
            questions: [
                {
                    question: 'What is the main reason for the increase in remote work?',
                    options: ['Companies want to save money', 'Employees prefer flexible schedules', 'Improvements in technology', 'It is a new law'],
                    answer: 'Improvements in technology',
                },
                {
                    question: 'Which of the following is a disadvantage of remote work mentioned in the text?',
                    options: ['Saving money', 'Feeling lonely', 'Having a flexible schedule', 'Communicating easily'],
                    answer: 'Feeling lonely',
                },
                 {
                    question: 'What does the word "commuting" mean in this context?',
                    options: ['Communicating with colleagues', 'Working from home', 'Traveling to and from work', 'Accessing company files'],
                    answer: 'Traveling to and from work',
                },
            ],
        },
    ],
    listening: [
        {
            id: 'a2-ordering-food',
            title: 'Ordering Food at a Restaurant',
            level: 'A2',
            transcript: `Waiter: Hello, are you ready to order?
Customer: Yes, I am. I'd like the chicken soup to start, please.
Waiter: Okay. And for your main course?
Customer: I'll have the grilled fish with vegetables.
Waiter: Excellent choice. Would you like anything to drink?
Customer: Just some water for me, please.
Waiter: Certainly. So that's one chicken soup, one grilled fish, and a water. I'll be right back with your drink.`,
            questions: [
                {
                    question: 'What does the customer order first?',
                    options: ['Grilled fish', 'A drink', 'Chicken soup', 'Vegetables'],
                    answer: 'Chicken soup',
                },
                {
                    question: 'What is the customer\'s main course?',
                    options: ['Chicken soup', 'Grilled fish', 'Steak', 'Pasta'],
                    answer: 'Grilled fish',
                },
                {
                    question: 'What does the customer want to drink?',
                    options: ['Juice', 'Soda', 'Water', 'Coffee'],
                    answer: 'Water',
                },
            ],
        },
        {
            id: 'b1-planning-trip',
            title: 'Planning a Weekend Trip',
            level: 'B1',
            transcript: `Anna: Hi Ben, do you have any plans for the weekend?
Ben: Not really. I was thinking of just relaxing at home. Why?
Anna: Well, I was wondering if you'd be interested in a short trip. My friends and I are planning to go hiking in the mountains.
Ben: That sounds interesting! I haven't been hiking in a long time. When are you planning to leave?
Anna: We're thinking of leaving early on Saturday morning and coming back on Sunday evening. We've already booked a small cabin to stay in.
Ben: A cabin in the mountains sounds perfect. I'm in! What should I bring?
Anna: Just some comfortable shoes, warm clothes, and maybe a camera. The views are supposed to be amazing.`,
            questions: [
                {
                    question: 'What is Anna planning to do this weekend?',
                    options: ['Relax at home', 'Go hiking', 'Visit her family', 'Go to the cinema'],
                    answer: 'Go hiking',
                },
                {
                    question: 'Where will they stay during the trip?',
                    options: ['In a hotel', 'At a campsite', 'In a cabin', 'With friends'],
                    answer: 'In a cabin',
                },
                 {
                    question: 'What does Anna suggest Ben should bring?',
                    options: ['A book and some games', 'Food and water', 'A tent and a sleeping bag', 'Comfortable shoes and warm clothes'],
                    answer: 'Comfortable shoes and warm clothes',
                },
            ],
        },
    ],
};
