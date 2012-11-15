
function showPivot(pivotName) {
    document.location.hash = '#' + langTag() + '-' + pivotName; 
    var toHide = document.getElementsByClassName("pivot ");
    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = "none";
    }
    var toShow = document.getElementById(pivotName);
    toShow.style.display = "block";
}

function writeTopLevelURL(divID, titleString) {
    document.write('<a href="#" onclick="showPivot(\''+divID+'\'); return false;" class="pivot-switch">' + loc(titleString) + '</a>');
}

document.write('<h2 bi:titleflag="t1" bi:title="t1">');
writeTopLevelURL("pivot-international-student", "International Student");
writeTopLevelURL("pivot-global-medical", "Global Medical");
writeTopLevelURL("pivot-travel-insurance", "Travel Insurance");
writeTopLevelURL("pivot-texas-indiana-residents", "Texas Residents");
writeTopLevelURL("pivot-texas-indiana-residents", "Indiana Residents");
writeTopLevelURL("pivot-life-insurance", "Life Insurance");
document.write('</h2>');
        


