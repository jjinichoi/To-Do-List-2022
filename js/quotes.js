const quotes = [
    {
        quote: "Only I can change my life, no one can do it for me",
        interpretation: "내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요.",
    },
    {
        quote: "If not now, then when?",
        interpretation: "지금 아니면 언제 하실 건가요?",
    },
    {
        quote: "Believe in yourself.",
        interpretation: "자기자신을 믿으세요",
    },
    {
        quote: "Don't beat yourself up.",
        interpretation: "자책하지 마세요.",
    },
    {
        quote: "Live positive.",
        interpretation: "긍정적으로 사세요.",
    },
    {
        quote: "Don't dwell on the past.",
        interpretation: "과거에 연연하지 마세요.",
    },
    {
        quote: "Courage is very important when it comes to anything.",
        interpretation: "어떤 것이든지 용기는 정말 중요하다.",
    },
    {
        quote: "I don't want a perfect life, I want a happy life.",
        interpretation: "완벽한 인생을 원하지 않고 행복한 삶을 원합니다.",
    },
    {
        quote: "No sweat, No sweet.",
        interpretation: "땀 없인 달콤함도 없다.",
    },
    {
        quote: "Don't take your parents for granted.",
        interpretation: "부모님의 존재를 당연시하지 마세요.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const interpretation = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
interpretation.innerText = todaysQuotes.interpretation;