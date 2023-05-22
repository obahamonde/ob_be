import{f as n,o as e,c as a,g as t,b as s,h as o}from"./index-519fb558.js";const r="/images/requests.png",c={class:"prose prose-sm m-auto text-left"},p=t('<h1>Are you still using requests?</h1><p><img src="'+r+'" alt=""></p><p><code>2023-02-20</code></p><h2>TL;DR</h2><p>If you are using <code>requests</code> in your project, you should consider migrating to <code>httpx</code> or <code>aiohttp</code> as soon as possible.</p><h2>Why?</h2><p>Asynchronous programming is a technique used to improve the performance of programs that need to perform I/O operations, such as reading or writing to a file or sending a request over a network. Traditional synchronous programming blocks the execution of the program while waiting for I/O operations to complete, which can lead to long wait times and reduced performance. Asynchronous programming, on the other hand, allows the program to continue executing other tasks while waiting for I/O operations to complete, which can lead to improved performance and faster response times. In Python, asynchronous programming can be achieved using the asyncio module, which provides a framework for writing asynchronous code using async and await keywords. The async and await keywords were introduced in Python 3.5 to make it easier to write asynchronous code. The async keyword is used to define a coroutine, which is a special type of function that can be suspended and resumed at certain points in its execution. The await keyword is used to suspend the execution of a coroutine until a certain condition is met, such as the completion of an I/O operation. Coroutines need to be executed within an event loop which is a programming construct that manages the execution of coroutines.</p><h2>The Event Loop</h2><p>The event loop in Python is implemented in the asyncio module and provides a way to schedule and execute coroutines in an asynchronous fashion. The event loop consists of a central loop that continuously waits for new events and executes coroutines that are waiting for I/O operations to complete. Coroutines in Python are defined using the async keyword and can be suspended and resumed using the await keyword. When a coroutine encounters an I/O operation, it can yield control back to the event loop, allowing other coroutines to execute while the I/O operation is in progress. The event loop in Python uses an event queue to manage the scheduling of coroutines. Coroutines are added to the event queue when they are created or when they are resumed after being suspended. When an I/O operation completes, the event loop selects the next coroutine from the event queue and resumes its execution.</p><h2>Talk is cheap, show me the code</h2><p>We will compare the performance of two http modules, requests and aiohttp. The requests module is a synchronous http client for Python, while the aiohttp module is an asynchronous http module for Python.</p><p><strong>Requests</strong></p>',12),y=s("pre",null,[s("code",{class:"language-python"},[s("div",{class:"shiki-container language-python"},[s("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," requests "),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," Session")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," time "),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"def"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"fetch"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"->"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"with"),s("span",{style:{color:"#DBD7CAEE"}}," Session"),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"as"),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        response "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," response"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"json"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"base_url "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#C98A7D"}},"https://jsonplaceholder.typicode.com/todos/"),s("span",{style:{color:"#C98A7D99"}},'"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"def"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"main"),s("span",{style:{color:"#666666"}},"():")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    start "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CAEE"}}," i "),s("span",{style:{color:"#4D9375"}},"in"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"range"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"1"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"101"),s("span",{style:{color:"#666666"}},"):")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        url "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," base_url "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"i"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"fetch"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},"))")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    end "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"f"),s("span",{style:{color:"#C98A7D"}},'"Total time: '),s("span",{style:{color:"#C99076"}},"{"),s("span",{style:{color:"#DBD7CAEE"}},"end "),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#DBD7CAEE"}}," start"),s("span",{style:{color:"#C99076"}},"}"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"f"),s("span",{style:{color:"#C98A7D"}},'"Requests per second: '),s("span",{style:{color:"#C99076"}},"{"),s("span",{style:{color:"#4C9A91"}},"60"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"end "),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#DBD7CAEE"}}," start"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#C99076"}},"}"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"__name__"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#C98A7D"}},"__main__"),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    main"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"# Total time: 21.9579128080004")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"# Requests per second: 4.554166913513057n")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vitesse-light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," requests "),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," Session")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," time "),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," perf_counter")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"def"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"fetch"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"->"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"with"),s("span",{style:{color:"#393A34"}}," Session"),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"as"),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        response "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," response"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"json"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"base_url "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#B56959"}},"https://jsonplaceholder.typicode.com/todos/"),s("span",{style:{color:"#B5695999"}},'"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"def"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"main"),s("span",{style:{color:"#999999"}},"():")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    start "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," perf_counter"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"for"),s("span",{style:{color:"#393A34"}}," i "),s("span",{style:{color:"#1E754F"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"range"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"1"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"101"),s("span",{style:{color:"#999999"}},"):")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        url "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," base_url "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"i"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"fetch"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},"))")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    end "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," perf_counter"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"f"),s("span",{style:{color:"#B56959"}},'"Total time: '),s("span",{style:{color:"#A65E2B"}},"{"),s("span",{style:{color:"#393A34"}},"end "),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#393A34"}}," start"),s("span",{style:{color:"#A65E2B"}},"}"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"f"),s("span",{style:{color:"#B56959"}},'"Requests per second: '),s("span",{style:{color:"#A65E2B"}},"{"),s("span",{style:{color:"#2F798A"}},"60"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"end "),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#393A34"}}," start"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#A65E2B"}},"}"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"__name__"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#B56959"}},"__main__"),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    main"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# Total time: 21.9579128080004")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# Requests per second: 4.554166913513057n")]),o(`
`),s("span",{class:"line"})])])])])],-1),i=s("p",null,[s("strong",null,"Aiohttp")],-1),A=s("pre",null,[s("code",{class:"language-python"},[s("div",{class:"shiki-container language-python"},[s("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," asyncio")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," aiohttp "),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," ClientSession")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," time "),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"def"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"fetch"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," ClientSession"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"->"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"with"),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"as"),s("span",{style:{color:"#DBD7CAEE"}}," response"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," response"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"json"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"base_url "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#C98A7D"}},"https://jsonplaceholder.typicode.com/todos/"),s("span",{style:{color:"#C98A7D99"}},'"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"def"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"main"),s("span",{style:{color:"#666666"}},"():")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    start "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"with"),s("span",{style:{color:"#DBD7CAEE"}}," ClientSession"),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"as"),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        tasks "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"[]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CAEE"}}," i "),s("span",{style:{color:"#4D9375"}},"in"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"range"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"1"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"101"),s("span",{style:{color:"#666666"}},"):")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"            url "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," base_url "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"i"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"            task "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," asyncio"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"create_task"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"fetch"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"url"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," session"),s("span",{style:{color:"#666666"}},"))")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"            tasks"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"append"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"task"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        responses "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," asyncio"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"gather"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CAEE"}},"tasks"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CAEE"}}," response "),s("span",{style:{color:"#4D9375"}},"in"),s("span",{style:{color:"#DBD7CAEE"}}," responses"),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"            "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"response"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    end "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," perf_counter"),s("span",{style:{color:"#666666"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"f"),s("span",{style:{color:"#C98A7D"}},'"Total time: '),s("span",{style:{color:"#C99076"}},"{"),s("span",{style:{color:"#DBD7CAEE"}},"end "),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#DBD7CAEE"}}," start"),s("span",{style:{color:"#C99076"}},"}"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"print"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"f"),s("span",{style:{color:"#C98A7D"}},'"Requests per second: '),s("span",{style:{color:"#C99076"}},"{"),s("span",{style:{color:"#4C9A91"}},"60"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"end "),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#DBD7CAEE"}}," start"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#C99076"}},"}"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"__name__"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#C98A7D"}},"__main__"),s("span",{style:{color:"#C98A7D99"}},'"'),s("span",{style:{color:"#666666"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    asyncio"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#DBD7CAEE"}},"get_event_loop"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#DBD7CAEE"}},"run_until_complete"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"main"),s("span",{style:{color:"#666666"}},"())")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"# Total time: 0.71235577200423")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"# Requests per second: 140.37929350757923o")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vitesse-light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," asyncio")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," aiohttp "),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," ClientSession")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," time "),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," perf_counter")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"def"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"fetch"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," ClientSession"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"->"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"with"),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"as"),s("span",{style:{color:"#393A34"}}," response"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," response"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"json"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"base_url "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#B56959"}},"https://jsonplaceholder.typicode.com/todos/"),s("span",{style:{color:"#B5695999"}},'"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"def"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"main"),s("span",{style:{color:"#999999"}},"():")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    start "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," perf_counter"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"with"),s("span",{style:{color:"#393A34"}}," ClientSession"),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"as"),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        tasks "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"[]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"for"),s("span",{style:{color:"#393A34"}}," i "),s("span",{style:{color:"#1E754F"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"range"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"1"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"101"),s("span",{style:{color:"#999999"}},"):")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"            url "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," base_url "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"str"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"i"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"            task "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," asyncio"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"create_task"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"fetch"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"url"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," session"),s("span",{style:{color:"#999999"}},"))")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"            tasks"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"append"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"task"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        responses "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," asyncio"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"gather"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}},"tasks"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"for"),s("span",{style:{color:"#393A34"}}," response "),s("span",{style:{color:"#1E754F"}},"in"),s("span",{style:{color:"#393A34"}}," responses"),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"            "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"response"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    end "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," perf_counter"),s("span",{style:{color:"#999999"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"f"),s("span",{style:{color:"#B56959"}},'"Total time: '),s("span",{style:{color:"#A65E2B"}},"{"),s("span",{style:{color:"#393A34"}},"end "),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#393A34"}}," start"),s("span",{style:{color:"#A65E2B"}},"}"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"print"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"f"),s("span",{style:{color:"#B56959"}},'"Requests per second: '),s("span",{style:{color:"#A65E2B"}},"{"),s("span",{style:{color:"#2F798A"}},"60"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"end "),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#393A34"}}," start"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#A65E2B"}},"}"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"__name__"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#B56959"}},"__main__"),s("span",{style:{color:"#B5695999"}},'"'),s("span",{style:{color:"#999999"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    asyncio"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#393A34"}},"get_event_loop"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#393A34"}},"run_until_complete"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"main"),s("span",{style:{color:"#999999"}},"())")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# Total time: 0.71235577200423")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# Requests per second: 140.37929350757923o")]),o(`
`),s("span",{class:"line"})])])])])],-1),D=s("h2",null,"Conclusion",-1),E=s("p",null,"As you can see, the aiohttp module is around 30 times faster than the requests module. This is because the aiohttp module is asynchronous, while the requests module is synchronous. The aiohttp module uses the asyncio module to perform asynchronous I/O operations, which allows it to perform multiple I/O operations at the same time. The requests module, on the other hand, performs I/O operations synchronously, which means that it blocks the execution of the program while waiting for I/O operations to complete. This can lead to long wait times and reduced performance.",-1),B=[p,y,i,A,D,E],_="Are you still using requests?",g=[{property:"og:title",content:"Are you still using requests?"}],w={__name:"requests",setup(C,{expose:l}){return l({frontmatter:{title:"Are you still using requests?",meta:[{property:"og:title",content:"Are you still using requests?"}]}}),n({title:"Are you still using requests?",meta:[{property:"og:title",content:"Are you still using requests?"}]}),(d,m)=>(e(),a("div",c,B))}};export{w as default,g as meta,_ as title};