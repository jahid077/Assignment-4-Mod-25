let currentTab = "all";

const tabActive = {
    backgroundColor: '#3b82f6',
    color: '#fff'
};

const tabInactive = {
    backgroundColor: '#fff',
    color: '#64748b'
};


function switchTab(tab){
    // console.log(tab);
    const tabs = ["all", "interviewed", "rejected"];
    
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        // console.log(tabName);
        if(t === tab){
            tabName.style.backgroundColor = tabActive.backgroundColor;
            tabName.style.color = tabActive.color;
        }else{
            tabName.style.backgroundColor = tabInactive.backgroundColor;
            tabName.style.color = tabInactive.color;
        }
    }
}









document.addEventListener('DOMContentLoaded', function(){
    switchTab('all');
})