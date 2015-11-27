#!/usr/bin/perl
#

`rm -rf ~/tmp/datatmp`;
`mkdir -p ~/tmp/datatmp ; cp ~/data.csv ~/tmp/datatmp/`;

my $tmpDir = "~/tmp/datatmp/";
chdir($tmpDir);
`tail -n +2 $tmpDir/data.csv > $tmpDir/data_minus_header.csv`;
`cd $tmpDir ; split -l 100 $tmpDir/data_minus_header.csv split_data_`;

my @splitDatas = split("\n", `ls -1 $tmpDir/split_data_*`);
foreach my $data (@splitDatas) {
   print "Adding header to $data\n";
   `head -n1 $tmpDir/data.csv | cat - $data > $data.plus_header`;
}

my @finalSplits = split("\n", `ls -1 $tmpDir/*.plus_header`);
foreach my $finalSplit (@finalSplits) {
   print "Processing $finalSplit\n";
   my $ret = system("php -f /home1/taianfin/public_html/policydb/index.php readFromDisk=1 specificFile=\"$finalSplit\"");
   print "Done processing $finalSplit". ($ret == 0 ? "success" : "failed with error $ret!!") ."\n";
   if ($ret != 0) {
      die("Failed to process all files.");
   }
}
print "Done processing all files\n";
