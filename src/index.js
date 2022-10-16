const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) return;

        selectTab(tab)
        showTabInfo(tab)
    });
});

function selectTab(tab){
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected");
    tab.classList.add("selected");
}

function showTabInfo(tab){
    const selectedInfo = document.querySelector(".info.selected");
    selectedInfo.classList.remove("selected");
    const tabIdInfo = `info-${tab.id}`
    const infoToShow = document.getElementById(tabIdInfo)
    infoToShow.classList.add("selected")
}