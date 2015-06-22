tell application "Terminal" to do shell script "
cd ~/Desktop/taiantools
sh updateTools.sh
perl processLeads.pltxt
"
