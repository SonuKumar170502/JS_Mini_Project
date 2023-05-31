// Changed backgroundColor Dynamically
let index=0;
setInterval(
    
    function changeColor()
    {
       var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
            '#faa100','#ff9504','#ff891a'];
       const bd = document.querySelector("body");
       bd.style.transition="all 2s";
       bd.style.backgroundColor=colors[index++]
       if(index>colors.length-1)
       {
          index=0;
       }
    
    },2000)

    
    const quoteText=document.querySelector('.quote');
    const quoteBtn = document.querySelector('.Btn')
    let author = document.querySelector('.name')

    const soundBtn = document.querySelector('.sound');
    const copyBtn = document.querySelector('.copy')
    const twitterBtn = document.querySelector('.twitter')

    soundBtn.addEventListener('click',()=>{
      let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`)
      speechSynthesis.speak(utterance)
    })

    copyBtn.addEventListener("click",()=>{
      navigator.clipboard.writeText(quoteText.innerText);
    })

    twitterBtn.addEventListener("click",()=>{
      let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
      window.open(twitterUrl,"_blank")
    })
    
    // Randdom Quotes Generator....
    function randomQuote(){
      quoteBtn.innerText="loding..."
      quoteBtn.classList.add("loding");
      fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{
         
         quoteText.innerText=result.content;
         author.textContent=result.author;
         quoteBtn.classList.remove("loding");
         quoteBtn.innerText="New Quote"
      })
      
    }
    quoteBtn.addEventListener("click",randomQuote);







