const quotes = [
    {
        quote: "노력을 이기는 재능은 없고 노력을 외면하는 결과도 없다.",
        author: "이창호 9단",
    },
    {
        quote: "승리한 대국의 복기는 '이기는 습관'을 만들어주고 패배한 대국의 복기는 '이기는 준비'를 만들어준다.",
        author: "조훈현 9단",
    },
    {
        quote: "늘 승자가 될수는 없지만 패자의 역할에 길들여져서는 안된다.",
        author: "이창호 9단",
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "Walt Disney",
    },
    {
        quote: "크게 실패할 용기 있는 자만이 크게 이룰 수 있다.",
        author: "John F.Kennedy",
    },
    {
        quote: "작은 일에서 성장할 능력이 있는 사람에게 큰일이 주어진다",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "불가능한 일에 도전하는 것은 꽤나 즐거운 일이다.",
        author: "Walt Disney",
    },
    {
        quote: "성공한 사람과 그렇지 못한 사람의 차이는 힘이나 지식의 부족이 아니라 의지의 부족이다.",
        author: "Vince Lombardi",
    },
    {
        quote: "꿈을 꿔라. 그러면 그 꿈이 당신을 만들 것이다.",
        author: "Robert J.Shiller",
    },
    {
        quote: "인생의 위대한 목표는 지식이 아니라 행동이다.",
        author: "Thomas Henry Huxley",
    },
]

const quote = document.querySelector("#quote span:first-child"); // ID:quote, 첫번째 span
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;