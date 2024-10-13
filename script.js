const target = document.getElementById("target")
const rest = document.getElementById("rest")
const OpenSideBar = document.getElementById("OpenSideBar")
const CloseSideBar = document.getElementById('CloseSideBar')
const Html = document.getElementById('html')
const LightMode = document.getElementById('LightMode')
const DarkMode = document.getElementById('DarkMode')

function Open(){
        target.classList.remove("md:hidden");
        target.classList.add("md:col-span-3");
        rest.classList.remove('md:col-span-12')
        rest.classList.add('md:col-span-9')
        OpenSideBar.classList.add("md:hidden")
        CloseSideBar.classList.remove("md:hidden")
        CloseSideBar.classList.remove("hidden")
        Html.classList.remove('md:dark:bg-slate-800')
}

function Close(){
    target.classList.remove("md:col-span-3")
    target.classList.add("md:hidden")
    rest.classList.remove("md:col-span-9")
    rest.classList.add("md:col-span-12")
    OpenSideBar.classList.remove('md:hidden')
    CloseSideBar.classList.add('md:hidden')
    Html.classList.add("md:dark:bg-slate-800")

}

OpenSideBar.addEventListener('click', ()=>Open());
CloseSideBar.addEventListener('click' , ()=>Close());
// rest.addEventListener("click" , ()=>Close());
// window.addEventListener('resize' , ()=>Close())

LightMode.addEventListener('click' , function(){
    DarkMode.classList.remove('hidden')
    Html.classList.remove('dark')
    LightMode.classList.add('hidden')
})

DarkMode.addEventListener('click', function(){
    DarkMode.classList.add('hidden')
    Html.classList.add('dark')
    LightMode.classList.remove('hidden')
})
