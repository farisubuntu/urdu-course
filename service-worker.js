/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["data/1/1.json", "a519c3ba233a200caef87cd38086c0f0"],
  ["data/1/101.json", "ba68ff279ea4892f40371c6e7d6cd24d"],
  ["data/1/102.json", "fad8fb3752607b3dd0680cb381fa873c"],
  ["data/1/103.json", "6f5bb196d8a8949947dddd9a3c2dc90a"],
  ["data/1/104.json", "7c8d6026bb2923021b23c31153211439"],
  ["data/1/105.json", "791dd65fb71b421a46c7d18996926e6c"],
  ["data/1/106.json", "c29a9d43fe3c3606facc6ac225188b1e"],
  ["data/1/dialogues/101.json", "2783d3fcf449f1b7a9ac75b7599b6273"],
  ["data/1/vocabularies/101.json", "be7624bc10142c9aa13f802ab760f08f"],
  ["data/10/10.json", "beefa52aab85a62e0facbd3f0050be70"],
  ["data/10/1001.json", "7e8b45d0d84b055b5d25d448ba8662f1"],
  ["data/10/1002.json", "427b103774932ad2a9f7f6bd276b35a1"],
  ["data/10/1003.json", "1e4a482498ebb0c3140034975f097f8d"],
  ["data/10/1004.json", "8b2afa64384fd8664b09e0c577fc70a9"],
  ["data/10/1005.json", "8ee5f9250f944d1f32dbe7abe39ef59f"],
  ["data/10/1006.json", "96780a52a225f1c63dec57a575a1e241"],
  ["data/10/dialogues/1001.json", "908aede49e7f7ebc6b731a04cbbb45c0"],
  ["data/10/vocabularies/1001.json", "9005bce68e0f8cd2d134325ffda663d9"],
  ["data/11/11.json", "578c271c8b6fa00071887f6e91ca8892"],
  ["data/11/1101.json", "105292b3f202ee0731252f7e27eba227"],
  ["data/11/1102.json", "e783c20583814635184620a3a3521d38"],
  ["data/11/1103.json", "829f34aeca98aececd710aa4f9e9046c"],
  ["data/11/1104.json", "2bc0b8ca069ccba53144cc29b64edade"],
  ["data/11/1105.json", "9d8c1794a88af08b186dc5e075566e77"],
  ["data/11/1106.json", "9a5cf24db8e8ada403ee2624fe526c3f"],
  ["data/11/dialogues/1101.json", "f23c9465faf80d1c1627dec96d9e6cdb"],
  ["data/11/vocabularies/1101.json", "3fca6ca6ad71a02edf212a1a1d57a19f"],
  ["data/12/12.json", "90692a86cd7d6cb90389fbbbd2824cf0"],
  ["data/12/1201.json", "75a94cb015c92a9c20659059f29600e7"],
  ["data/12/1202.json", "8881a4f44a9ae347eff2c5de23a7aba4"],
  ["data/12/1203.json", "492558ea01815f13c19b7a9972203376"],
  ["data/12/1204.json", "91f71bba13e8c3a0d17c6d3a1e88a190"],
  ["data/12/1205.json", "a256cdd5ba3bc5d6838b1a3ee59e4f00"],
  ["data/12/1206.json", "181a7e54de5ed78c6d920045977d98c3"],
  ["data/12/dialogues/1201.json", "60f32fac5f5a0454b646eb425ebad2a6"],
  ["data/12/vocabularies/1201.json", "389ece4f56942b5ef1a37b302dfb9e7f"],
  ["data/13/13.json", "2d6c2bf57f461ef52495fdd8369ce0ca"],
  ["data/13/1301.json", "5fe67eb2312792eeddafc6d64d7a510a"],
  ["data/13/1302.json", "53b6c7d764feba6349d97ce3a8e5a57e"],
  ["data/13/1303.json", "ed03bd0f331455a25ea05ed40d579fc2"],
  ["data/13/1304.json", "a32a5cf4435104b6f93e4be67c996375"],
  ["data/13/1305.json", "d92d202e3d26c255d49ea443badbc315"],
  ["data/13/1306.json", "c7878679f2fc2328cc6251d36ad052ad"],
  ["data/13/dialogues/1301.json", "cf2d2c6bad143364f0aaf0a670f8024c"],
  ["data/13/vocabularies/1301.json", "db3be2a994c0fc48232eabfed846b76b"],
  ["data/14/14.json", "9b9099402f38798facb27a5cadba2cdd"],
  ["data/14/1401.json", "41de28a4d8f8ba12565d706118436389"],
  ["data/14/1402.json", "d4a612a36d4fa6803b3ac34255151313"],
  ["data/14/1403.json", "ec93ef1f627e781031d18c296c97d350"],
  ["data/14/1404.json", "b838658ba097fc56b6180ef65e3463e8"],
  ["data/14/1405.json", "d740b7f33943250a2f7c08c82675cc5d"],
  ["data/14/1406.json", "515c39fb3fd1fb856928e74535787ade"],
  ["data/14/dialogues/1401.json", "b435b1f00c14fd0cd32576adb965b945"],
  ["data/14/vocabularies/1401.json", "1f1ebdbfb152e21526262310835d842a"],
  ["data/15/15.json", "0e99a7a34082748a354f9493e233269c"],
  ["data/15/1501.json", "9c5fe394b359061d915ecfc07df2ed9a"],
  ["data/15/1502.json", "385c6ded5ab5b77b8e71aebeecdc1371"],
  ["data/15/1503.json", "39d873af49a34648dd60575ae4685a91"],
  ["data/15/1504.json", "4c4206f1547a6b0679e3ef5e99d27092"],
  ["data/15/1505.json", "f0f396cecaffcd9f6f67da11b3a6137d"],
  ["data/15/1506.json", "1d39c34f577f917bc63a13b183c162ed"],
  ["data/15/vocabularies/1501.json", "b16d6d5c2fcdee65ee78ebad070ee0a8"],
  ["data/16/16.json", "f32c3251257be498cb0e2a93800bdae6"],
  ["data/16/1601.json", "546cd4b14a663e3a6e8e56952b83121a"],
  ["data/16/1602.json", "3d44fe6a82dc40d2bad8e77ea58e6d60"],
  ["data/16/1603.json", "5f44f0a2b0578fdc54239b76820a7c71"],
  ["data/16/1604.json", "04617cbe64ac67bd0cc8d2ca29fe2460"],
  ["data/16/1605.json", "65e611b8e9faf8dd2fbcae6c25e268de"],
  ["data/16/1606.json", "1845b1c71da5257758c388935e5092e8"],
  ["data/16/vocabularies/1601.json", "ad9e560b05f86b9c484ee28a1e8a7f97"],
  ["data/17/17.json", "6f3babf76046273f1396b7677c65dc20"],
  ["data/17/1701.json", "27cdc4f14d882726814c284cbc958ac1"],
  ["data/17/1702.json", "3ec7897a58ef7bc02644820005929bff"],
  ["data/17/1703.json", "8238ea7683994918a4db594a8441beb9"],
  ["data/17/1704.json", "82b396af9704644b59168bf19e0b12f4"],
  ["data/17/1705.json", "2d524175c8e2759edee866116be80415"],
  ["data/17/1706.json", "8ae18660abcb53c92daff04e4aceb42f"],
  ["data/17/vocabularies/1701.json", "07e3d61262f411ed263a5b04ea17b1eb"],
  ["data/2/2.json", "d3d079c2bdd8d30c41ba1510937dfd54"],
  ["data/2/201.json", "f872c287a4938524d335caf664bd3c3f"],
  ["data/2/202.json", "b8cda221f4b5d06e2306e076a8c1cbd3"],
  ["data/2/203.json", "96a7802ce45d1eae24a56cc7b5896a58"],
  ["data/2/204.json", "4767095041680d3bf013ab850b187a06"],
  ["data/2/205.json", "bdc12151627bc5aa4dd91bdef0470bf9"],
  ["data/2/206.json", "663540b26ddea7a24b2de0eb40fda1a2"],
  ["data/2/dialogues/201.json", "d82a089a23c8fe553daa6e290933617d"],
  ["data/2/vocabularies/201.json", "31ea5b02df7ddf276dcda3d08114feb1"],
  ["data/22/22.json", "557c09725d979700459b748f1bb2beab"],
  ["data/22/2201.json", "18842e5c1f563db5f7a88f1679216a6b"],
  ["data/22/2202.json", "bc844b7b5ffb73040fa705903d9a2905"],
  ["data/22/2203.json", "742eb36ab4a574467eade8137b900767"],
  ["data/22/2204.json", "3594edb40f62590a262e4875ca2e0fde"],
  ["data/22/2205.json", "92d45c0da55e6d38daf23b557b8dce1b"],
  ["data/22/2206.json", "c25d8d8c51d9d2891c1a1ea64ab90d0d"],
  ["data/22/dialogues/2201.json", "19ccd94cef30c8dab60ddd72c7386736"],
  ["data/22/vocabularies/2201.json", "8c2adb77ac30f91e55bf63d94d2a6ebd"],
  ["data/23/23.json", "3d60067196959e40d957a339bb9c4f23"],
  ["data/23/2301.json", "42e8c543286b030270f7c668d9d40990"],
  ["data/23/2302.json", "87d673b59a5934cda0ba26a089b9dca7"],
  ["data/23/2303.json", "0c6bc5f5b78ef36b815bf938015815a1"],
  ["data/23/2304.json", "31def08668ab4ce78a71e5cfc895a960"],
  ["data/23/2305.json", "89697bacb415f6252e012efbae865088"],
  ["data/23/2306.json", "7b6ead24de955ae2e9a106d71e178419"],
  ["data/23/dialogues/2301.json", "866a949c6757eaa8967e604b04b38c0f"],
  ["data/23/vocabularies/2301.json", "d758f6d40eb0b96fdd988e2b86a9a99f"],
  ["data/24/24.json", "35e2ab34369da14efddd1738a18d951f"],
  ["data/24/2401.json", "578d2e5e9c91f762775ec206017ad80b"],
  ["data/24/2402.json", "522598ca1627a398cb77f3fd8c35a77a"],
  ["data/24/2403.json", "e23c5ec4a80ad21696fcc711c433ef86"],
  ["data/24/2404.json", "a4edf58a3f9267b6f8a46a045d2c44e7"],
  ["data/24/2405.json", "e81503d681bb5ae8e3cbbabe264a3b63"],
  ["data/24/2406.json", "50655e2b41bcc1fe2272bc6955ccfb3b"],
  ["data/24/dialogues/2401.json", "3b7497542945555ceb22f311a7adc63c"],
  ["data/24/vocabularies/2401.json", "b505529dad3c6681e17e00f6180c1d81"],
  ["data/25/25.json", "78a67ce54eb43625d958b9de600b2fe6"],
  ["data/25/2501.json", "63c46955a997ea3541d1c7fd160bbc1b"],
  ["data/25/2502.json", "db44b4063ab3cf9e9f29357caba0824d"],
  ["data/25/2503.json", "c58ddac0b5c2186528c49ac8cc06d835"],
  ["data/25/2504.json", "5cedc21c47c8c855b28a36cb38bd4f2e"],
  ["data/25/2505.json", "30f4f6d053e51b78c1b99a4734ccad29"],
  ["data/25/2506.json", "079fd887068753fb56efedbf5a2ec83f"],
  ["data/25/dialogues/2501.json", "6d5ebdce3ac8a9b8bb3323ee7f3db8b3"],
  ["data/25/vocabularies/2501.json", "25826632efba1ad74ed14fc97794c39b"],
  ["data/26/26.json", "f28bd291856168f24ec5d834e94cc526"],
  ["data/26/2601.json", "18e99a89ae6717fae9367481bbec9ad6"],
  ["data/26/2602.json", "13779929ce1c882029c142fa6aae1d09"],
  ["data/26/2603.json", "ee906c1873f892ecf28ca55e9ddd8439"],
  ["data/26/2604.json", "7364d7cf692b25296c08d516e4435382"],
  ["data/26/2605.json", "1bff419f698cb6a9d2ecfd06288991ba"],
  ["data/26/2606.json", "76d902f073a7cf0f1c892e961ae49260"],
  ["data/26/dialogues/2601.json", "6a6ec75396fa68c956daa5e2b4d89fe6"],
  ["data/26/vocabularies/2601.json", "d8fb73ae30f841d37ca233f9638d870f"],
  ["data/27/27.json", "1de53af27e395f4414f6744435210121"],
  ["data/27/2701.json", "5ccbaab8fbe867b46d70cb22e767678e"],
  ["data/27/2702.json", "7242558f79bdfc6f38a40dc94a13b4fd"],
  ["data/27/2703.json", "304928181bb406e0cc032198acb00260"],
  ["data/27/2704.json", "79edf589d22922ab1b13576ee38ae26d"],
  ["data/27/2705.json", "fb680f2d0f88c80df4b5f603b09d5b26"],
  ["data/27/2706.json", "66698a9705c0fb964479fe4bcbb7db56"],
  ["data/27/dialogues/2701.json", "6694543e8dab41cf7f8c9a7339114f59"],
  ["data/27/vocabularies/2701.json", "636ef20fd081aef4f8f69e1d23b19564"],
  ["data/28/28.json", "ccc0edce09057d680d81cacc24706563"],
  ["data/28/2801.json", "1ddbd82125a8e5262462d6ffaa1ae565"],
  ["data/28/2802.json", "394fd5362519c2d264a29fac54244dac"],
  ["data/28/2803.json", "b81ea7a3183c3f8a1b2ca106302bcc47"],
  ["data/28/2804.json", "b606ca5ed0beaed30f5039f22e183a19"],
  ["data/28/2805.json", "19e6a3e777e0ec054ed8ff4fe234e5d4"],
  ["data/28/2806.json", "4e2d327719f607278e058089e9e5ad3b"],
  ["data/28/dialogues/2801.json", "e3a15b4aa902a695cc0a98385510b417"],
  ["data/28/vocabularies/2801.json", "bbdb0a9304d1b2eefc16616d6240bace"],
  ["data/29/29.json", "af83c458c3850e726ca4824f7f9a1ca7"],
  ["data/29/2901.json", "98e987d1ebed5cd5eb127a54420f85ca"],
  ["data/29/2902.json", "9da985cd2310e79f27ea000193cc96a1"],
  ["data/29/2903.json", "59e31e55851a3d9509231e34b6c2f0a8"],
  ["data/29/2904.json", "0594a8ef0531c0013ca47d9ca8b6e483"],
  ["data/29/2905.json", "f89fb5fd2111ff410808a4cc67391611"],
  ["data/29/2906.json", "f72eca28cd9d64110e5c1232dbb4abe2"],
  ["data/29/dialogues/2901.json", "5b36fac4ed6867237f03d1a67775b4be"],
  ["data/29/vocabularies/2901.json", "d9c770cbd15ac77c94d2274e5ed4639c"],
  ["data/3/3.json", "6b67cd983025b2b74dd0e43645899277"],
  ["data/3/301.json", "40097cb778a086a6f11aaf23609d5548"],
  ["data/3/302.json", "26a9d2f6860d87cc7655d3d8d68f7aaf"],
  ["data/3/303.json", "fb2ff8fb5f8dfb598064495f3c5a2a1a"],
  ["data/3/304.json", "f5b78bf41931bbc1faa32b9f581eb367"],
  ["data/3/305.json", "403c73f131d0f67672f9984613484b7f"],
  ["data/3/306.json", "d6e02f2714b80a08886cffbce0246da7"],
  ["data/3/dialogues/301.json", "09eaf702e612a7f027a19e153cedf43d"],
  ["data/3/vocabularies/301.json", "11efa7a6b37af927b96527e222e6b173"],
  ["data/30/30.json", "fcc42921a54e81eeeca536cb3b418926"],
  ["data/30/3001.json", "4bbeeefce5af34b26a7bf43f1e3cca7d"],
  ["data/30/3002.json", "c30f4572ce3d2037a904ac6f0cdb8d9a"],
  ["data/30/3003.json", "df44142173612acd3bbba5dceeaf9636"],
  ["data/30/3004.json", "3d7f513afe9775becc99e02ca3bc9de9"],
  ["data/30/3005.json", "235623a8196260631122dfa1810d9f0b"],
  ["data/30/3006.json", "5ca1c1ab68ae25845d6932d98347a766"],
  ["data/30/dialogues/3001.json", "d1c03c0a792ddab1754604a7f5536e05"],
  ["data/30/vocabularies/3001.json", "1a0d1a9c29f7bf71092b0894395cdd03"],
  ["data/31/31.json", "6a764479cfcde8eefa597c860e8813ee"],
  ["data/31/3101.json", "71a97168a0da1fae88ca0cf3a92a2539"],
  ["data/31/3102.json", "081ad0ee8e85231b05d091e281421c81"],
  ["data/31/3103.json", "aa989529c0c3281562dc8e96e599f5b1"],
  ["data/31/3104.json", "ead480c834892b407878edd0d39a4dce"],
  ["data/31/3105.json", "c852d50edb3f78a5c00ebc8777ed88f4"],
  ["data/31/3106.json", "9e45740976fb539dad71bc70f266f770"],
  ["data/31/dialogues/3101.json", "58f81253b4b80fceebb7b36d5234ef58"],
  ["data/31/vocabularies/3101.json", "bd35801fea7eae40ba3d3a6e2c3c69be"],
  ["data/34/34.json", "b6c00cbc33b121a468f426c095767ef5"],
  ["data/34/3401.json", "ec0bacc1122295569e7c0ab50adec136"],
  ["data/34/3402.json", "93eb4e0e9dae444f01e3dfe8812e0099"],
  ["data/34/3403.json", "1944b4c7a56d470bd36e069542506543"],
  ["data/34/3404.json", "2d87c716b5d0eeba0d913ff64a677dab"],
  ["data/34/3405.json", "94843005e5fa8a5f51e13e0ab510cd9c"],
  ["data/34/3406.json", "0f4a71358845f11276e6ba29a75048eb"],
  ["data/34/dialogues/3401.json", "c8847931ef6286dbf1a90b99271c51a0"],
  ["data/34/vocabularies/3401.json", "f5e45f7f643e3e475db7bc4346829ba6"],
  ["data/35/35.json", "2f82b3006e504c7416985a878c83cb53"],
  ["data/35/3501.json", "988ee385a6c6ecf9ca5bf16a99385846"],
  ["data/35/3502.json", "ee1bff6d8b32de2e1cc85a7ec8583be4"],
  ["data/35/3503.json", "17521c9403317a0d24ce6397eb2840e9"],
  ["data/35/3504.json", "57f5125b10a026278e98200d28e4d752"],
  ["data/35/3505.json", "f1414eb948e1dd7b1bfafe9c9a9a38c5"],
  ["data/35/3506.json", "7f4cff92cbea50c38c505ca7739b7aef"],
  ["data/35/dialogues/3501.json", "8a922a0b28ab04b94a0a2a4d47858c5e"],
  ["data/35/vocabularis/3501.json", "0cad56ffbae78fdf6e939d1222cbd127"],
  ["data/36/36.json", "50d33cb35a3ddad2ea5ef55469db4c4a"],
  ["data/36/3601.json", "5652ae9370b5dac925e081cfb37566e6"],
  ["data/36/3602.json", "4691f2777b44d5572196ae15988e293e"],
  ["data/36/3603.json", "0ceeb4f6795de6580954d198059b5f1f"],
  ["data/36/3604.json", "fbd2ec812959636d85bf833a37b9334b"],
  ["data/36/3605.json", "fd333365044009bf4faeebcd6a228a68"],
  ["data/36/3606.json", "d1d0b0f4da159168d13031c3769e4e43"],
  ["data/36/dialogues/3601.json", "91448e4f7f30479d5422e16fe1995d2d"],
  ["data/36/vocabularies/3601.json", "2e188b4fdfdcea1db0a22dfdbf1b40e4"],
  ["data/37/37.json", "72c69b7cf8858c69c2d7fcb77311a8a4"],
  ["data/37/3701.json", "1856140c16451a94e5e234e742d3fbce"],
  ["data/37/3702.json", "c685f10ccd9a393652bea5656723d0af"],
  ["data/37/3703.json", "10ad9af133d1b283423105e0149f20b2"],
  ["data/37/3704.json", "f0cc60f3676134649bb815be79343a90"],
  ["data/37/3705.json", "7ee2e763e5c16c9fd099878044d8316d"],
  ["data/37/3706.json", "3e542b1cb31d42a9e0e7ddb2573db5b0"],
  ["data/37/dialogues/3701.json", "0017a179fa822621df75dea7f443e983"],
  ["data/37/vocabularies/3701.json", "6793b3fc6c5f424d170451b4969ffeb3"],
  ["data/38/38.json", "89891cfd0ec0b902868d1b60ed1cb712"],
  ["data/38/3801.json", "80545df74c2c058168cc1dde0ed117a9"],
  ["data/38/3802.json", "ca4836a52ff1278c3551f2158fbfcfff"],
  ["data/38/3803.json", "187a780b0f58192401d063cf48570011"],
  ["data/38/3804.json", "a14eb65c96cda0b543b45f62251f2bf2"],
  ["data/38/3805.json", "5ea7812625ac37238ea181496b2e7928"],
  ["data/38/3806.json", "e50d5b13cfb66617b6cff654317fa131"],
  ["data/38/dialogues/3801.json", "41f19c03e8c0099146d04cdd42bdb5fa"],
  ["data/38/vocabularies/3801.json", "40264a1157f47b9809768181b50f6729"],
  ["data/39/39.json", "672fc092dfddd2a7c9bdffe8c5a8c76c"],
  ["data/39/3901.json", "77b755e9301176525839944a308faa9b"],
  ["data/39/3902.json", "c02498b499f43c2c5946b26d8cc3a84c"],
  ["data/39/3903.json", "4d2246b1e0928ecf6bfb173a37a55b9a"],
  ["data/39/3904.json", "6a4e2c5280f169b24f14b3c0c990b510"],
  ["data/39/3905.json", "62dc54c69b469ff803591048b06aa13f"],
  ["data/39/3906.json", "75687bef176d1beae1ec5a9bef9f24d3"],
  ["data/39/dialogues/3901.json", "6801bacb1aa54f59fd2bd661a88b38af"],
  ["data/39/vocabularies/3901.json", "ee1dae3529e34193c3b35f8d7df918b2"],
  ["data/4/4.json", "3fb6f3202ecb14f0f4be0ab76bb2c268"],
  ["data/4/401.json", "af890aa1162bbe3417ce967deae8b22b"],
  ["data/4/402.json", "c4a4c55e1e8285adc1859be20fedbab4"],
  ["data/4/403.json", "bc7f8aa37d5359aebb11468156c0eb60"],
  ["data/4/404.json", "033fa140d9b3062a0f5e5b48c15efbed"],
  ["data/4/405.json", "e1727124d2940e121acdcdcc05641aca"],
  ["data/4/406.json", "21b643521a5e38d16edea61186a3863c"],
  ["data/4/dialogues/401.json", "6e2dbad8eed4ba7e95037a2ee7466f5a"],
  ["data/4/vocabularies/401.json", "efa8ee4bdb398ffdc860f467694a4441"],
  ["data/40/40.json", "665bcf41f0cc93feb806838d35174033"],
  ["data/40/4001.json", "5f43647454919f593d9112e24a98d34e"],
  ["data/40/4002.json", "6d00daac0544347d4e85426762d5f008"],
  ["data/40/4003.json", "877dbea04d69c6ed5212f2413645d7f7"],
  ["data/40/4004.json", "6d794fb9623819c491591b00b1945769"],
  ["data/40/4005.json", "077e8169986c3cefb81746ade3ec019f"],
  ["data/40/4006.json", "e2553d9029e8fcc372c382e9d32cbacf"],
  ["data/40/dialogues/4001.json", "21df2aa562ae73a9c4af479bf9334426"],
  ["data/40/vocabularies/4001.json", "107c99245cfb1f54fe505c25bffce767"],
  ["data/5/5.json", "1c75c09c98e05dab21a71b4708d44568"],
  ["data/5/501.json", "a8ae68a196989bc20ac7642c417c4f5c"],
  ["data/5/502.json", "6d86495b2a1bb828e8934287bff38eff"],
  ["data/5/503.json", "afa12d927c21b933b0c6b44254d0c597"],
  ["data/5/504.json", "3cd5d259b805f2212e073221781a7867"],
  ["data/5/505.json", "efbc774ffcfd0341c7430e8e0db57929"],
  ["data/5/506.json", "5f4be499b7fe34f59671038fb639f5c4"],
  ["data/5/dialogues/501.json", "cc08a016d612ffd3d8a6bfa592ba74ae"],
  ["data/5/vocabularies/501.json", "175bfa70c077b2ad62da79a6678b39d8"],
  ["data/6/6.json", "b584cbdf5c3d28939f01a3a15dfec170"],
  ["data/6/601.json", "bb371959961f8cd5c832a2fb6e053bb8"],
  ["data/6/602.json", "ed179a8b8d033af921dbe6e00be9c025"],
  ["data/6/603.json", "93ab4b4995253bf1b08ed372944d1c24"],
  ["data/6/604.json", "173d57496443b1cd21178470f490524c"],
  ["data/6/605.json", "52d536aa9407bb4fa6aeacb0ccf50188"],
  ["data/6/606.json", "b689fd4044a7590e232d8ec2e8343453"],
  ["data/6/dialogues/601.json", "8c121a1da7f8219f6432349050bd67c9"],
  ["data/6/vocabularies/601.json", "9f50253763a65d854336abb197f14ff1"],
  ["data/7/7.json", "00bc9149e9282dcff1144abfe3dc324d"],
  ["data/7/701.json", "943bf9ea18138cd6f44e5820c16cb830"],
  ["data/7/702.json", "ddf19a646143b2e0bcc66251b4dfc8dd"],
  ["data/7/703.json", "a28065fae77ac99036c6c738a45e9429"],
  ["data/7/704.json", "239fa771e6c050fa7403da6f515f28f6"],
  ["data/7/705.json", "6cfc9ae2282436e77ba4e43fd1867e77"],
  ["data/7/706.json", "90d0168e0388e46e5c3e26bec0bf4cef"],
  ["data/7/dialogues/701.json", "bc9e29fd3c7e4a972fd18608b8a3bd80"],
  ["data/7/vocabularies/701.json", "181cb319d68710627565d68bc1d9dd53"],
  ["data/8/8.json", "260daf589df664cc1520399025012777"],
  ["data/8/801.json", "15c52aa2dee727f0e6cddc017c6d4d61"],
  ["data/8/802.json", "37fe0958637ece9620f06e3bccdc9491"],
  ["data/8/803.json", "cb0a3eb3b5ec18e832da9910b2ba9587"],
  ["data/8/804.json", "72edbb55ffebe38209930a4946c641bd"],
  ["data/8/805.json", "4c2bd2b5097a2308a247c16a18fd53d8"],
  ["data/8/806.json", "2edfbf1f1ba20c05e55883c1b5eead80"],
  ["data/8/dialogues/801.json", "4faa94ad84f25aed567e808e8458aad9"],
  ["data/8/dialogues/901.json", "4bf12309fc2d4d8d6a7c4267a47ee09e"],
  ["data/8/vocabularies/801.json", "ff271e609334ae78bd512ee1842a831d"],
  ["data/88/88.json", "19be5348be8b372c820ce9ee869fc5a6"],
  ["data/88/8801.json", "92f3663edcf9b688f38d4fa4392ceaa5"],
  ["data/88/8802.json", "07aa334cf86deed32e5ad80652a366c1"],
  ["data/88/8803.json", "28d68a8cff1f7c803e91b18b8444c8eb"],
  ["data/88/8804.json", "ddfdc02b0d141c8ef11069fa7e62c7ae"],
  ["data/88/8805.json", "a68fdd4ef25442702170d297aaec21aa"],
  ["data/88/8806.json", "654cde0bfdc965ff9200cb62301c6f4c"],
  ["data/88/dialogues/8801.json", "a0f0b1b42a542e7c3020cabe6765c678"],
  ["data/88/vocabularies/8801.json", "5cd7167d52a42938fd9d16b0093fbfc3"],
  ["data/89/89.json", "3ccea08e1b227ff1f22ce8d720ff5f36"],
  ["data/89/8901.json", "ddb5bd7926381fa0a1151533741ce0f1"],
  ["data/89/8902.json", "1263c6483394ef6d1fd45ab353b82710"],
  ["data/89/8903.json", "7205a5f6d7a6b102ba71430d6692ae50"],
  ["data/89/8904.json", "59b24d2a8c7d25aa6840337a47d226bb"],
  ["data/89/8905.json", "e03817b2f2f350302b46370b7878858b"],
  ["data/89/8906.json", "a4813edcf1a0813bfd2164e1ec9b1027"],
  ["data/89/dialogues/8901.json", "899491365defced1b98e065db41ff2c0"],
  ["data/89/vocabularies/8901.json", "0582d057974cdf0d1000327654fbaadc"],
  ["data/9/9.json", "76c816f18763ffb0fca3d011164270a2"],
  ["data/9/901.json", "9d0064081f55899ba0a2581ba5fdcf99"],
  ["data/9/902.json", "7ac80d5cc573ba7cbbbf50538f56b952"],
  ["data/9/903.json", "fdb1b3f6f6c80900c8219eec8fc2acad"],
  ["data/9/904.json", "41b21afde3771fd174d80c22d274f84a"],
  ["data/9/905.json", "023078b868475c9463d776b38f11fe53"],
  ["data/9/906.json", "e9a4c7abf6df192b5621a4534682dc2f"],
  ["data/9/dialogues/901.json", "4bf12309fc2d4d8d6a7c4267a47ee09e"],
  ["data/9/vocabularies/901.json", "53d198842c18c4c45751ba9c5835e97d"],
  ["data/90/90.json", "f7311aaf95fb00f5395b621f14483dc7"],
  ["data/90/9001.json", "d5d07411fc918d0f758e1f1933dc6b53"],
  ["data/90/9002.json", "d321777cf46c9cefe4595c53a59fe8ab"],
  ["data/90/9003.json", "9f6c7f2ed05a9edecd6e6e05801569ee"],
  ["data/90/9004.json", "5e845e412ec7cdc7c4010095a33887fc"],
  ["data/90/9005.json", "91858d81d44d27f9ec082f07d1f1be7b"],
  ["data/90/9006.json", "e9f38199b2c3bfdc4d7614355d349576"],
  ["data/90/dialogues/9001.json", "b5b9dca6387e07803ff41b9972ed5e03"],
  ["data/90/vocabularies/9001.json", "4c7884bd8c8d48ee0c780154c77ec5e4"],
  ["data/91/91.json", "8f1394339745c6f552b9a62251b8fbe6"],
  ["data/91/9101.json", "34122b720f4a3253452d74310e59f128"],
  ["data/91/9102.json", "d87c1d5d40e933cd3bf6ec968b2d12ce"],
  ["data/91/9103.json", "a5dfec871c41c0b93d0055906bf5db33"],
  ["data/91/9104.json", "509d9c05652183b1a85a49b0381b321e"],
  ["data/91/9105.json", "3843bae395e7f525bb38ca486697e146"],
  ["data/91/9106.json", "928a92aeaae4a8c4da437cb12a53a2e6"],
  ["data/91/dialogues/9101.json", "9af6f1ca18bb765d72834582a128c3cc"],
  ["data/91/vocabularies/9101.json", "23a5a984e1b1f8ca3d9a07a4f6c8cf7c"],
  ["data/all.json", "37e13ad773c8f4dab85d1f078cf72a9a"],
  ["data/dirs.txt", "d6d36838052a63f44a2d23c59bce7712"],
  ["images/1.jpeg", "83f5ecc1930385b52fc8e9e96356b03e"],
  ["images/10.jpeg", "3dcb11ae0181af84f97d2ff57742e9ad"],
  ["images/11.jpeg", "3709c513d3045224a12f3aad81b2f272"],
  ["images/12.jpeg", "666e46c2efaa1745ce85375b91c34531"],
  ["images/13.jpeg", "85b6cdbfa886952dacdb737b1af71635"],
  ["images/14.jpeg", "aced5f978be71cc6b0e74782ea171d0b"],
  ["images/15.jpeg", "7bb6af054bf76c82fa10350c81909dda"],
  ["images/16.jpeg", "7bb6af054bf76c82fa10350c81909dda"],
  ["images/17.jpeg", "7bb6af054bf76c82fa10350c81909dda"],
  ["images/2.jpeg", "facd3927fe4c0c6cef1e34554fa46fc3"],
  ["images/22.jpeg", "0333d56930dbf80761d171b12a3c4e52"],
  ["images/23.jpeg", "0f88c1326e2ec38cb597a46aa31a4203"],
  ["images/24.jpeg", "1c104b3f13e59194af2f219ea5a6a12a"],
  ["images/25.jpeg", "545ba629ec448a28d631b36f96189f06"],
  ["images/26.jpeg", "c58180ba9456697c626268e180717f44"],
  ["images/27.jpeg", "521b71699357bccf1d0f927439b18f2d"],
  ["images/28.jpeg", "d42e4aa1608d3674404100ffff077477"],
  ["images/29.jpeg", "9b7f442ce678cc50f5a02f6844018737"],
  ["images/3.jpeg", "69b57eca57430cfe0ab2a6bbb1389e61"],
  ["images/30.jpeg", "e2eed7ba7b2a6a753a95f8b71312eb18"],
  ["images/31.jpeg", "e2eed7ba7b2a6a753a95f8b71312eb18"],
  ["images/34.jpeg", "16e9b37e54575a008abc0a7fe0dc8a23"],
  ["images/35.jpeg", "da1cd1fd1a6695c9ce485a587a036408"],
  ["images/36.jpeg", "d5953dfbe8eafb89e7f7afdb9ce249e8"],
  ["images/37.jpeg", "666e46c2efaa1745ce85375b91c34531"],
  ["images/38.jpeg", "a990622269291b86b27d49dbde20dcc6"],
  ["images/39.jpeg", "6b3837c0b5499ba14b33d98fe38921b8"],
  ["images/4.jpeg", "927576c83b41c9a59a804bfcb2c8ac2f"],
  ["images/40.jpeg", "15c33b5c56545532b51d87ffddf107b0"],
  ["images/5.jpeg", "7c1a8769ca1a8a8f12d415e687fc9801"],
  ["images/6.jpeg", "b0912ee25c17c702dd7e62e5a4ee6ded"],
  ["images/7.jpeg", "4991f3911a190d793852b02e8ae555af"],
  ["images/8.jpeg", "841e7d42766593e345afd95818ad4ebe"],
  ["images/88.jpeg", "b9c8358db95def378aaa194c5c969b71"],
  ["images/89.jpeg", "9cf5baf1fdeb7ef42433d8b988dbf082"],
  ["images/9.jpeg", "87e7a841161c7f4b3270412fa759e86e"],
  ["images/90.jpeg", "d07337a9f71a633029d51ba03ed8b136"],
  ["images/91.jpeg", "ded9c16a8b62346a1a7f6ef5df63f238"],
  ["img_avatar2.png", "877d25f30d7557b53cf026f5d4fbe003"],
  ["index.html", "bc48357c8837f03b57137c3a7f41071e"],
  ["lib.js", "7591ddfb269332d8c8e2ee8a54336908"],
  ["manifest.json", "4710b7c57aabbfc5811449fffec57066"],
  [
    "next/UsingReact/useContext_useState/App.css",
    "7581f560afa0595112a011940213139b",
  ],
  [
    "next/UsingReact/useContext_useState/App.js",
    "a60295bf376e20039d80d4cc1de1e1b7",
  ],
  [
    "next/UsingReact/useContext_useState/Category.css",
    "6b3408eec5d698c33d2a6abac46c9a7f",
  ],
  [
    "next/UsingReact/useContext_useState/Category.js",
    "45cfcf79ad51fa7ff52128fb404122ad",
  ],
  [
    "next/UsingReact/useContext_useState/CategoryContext.js",
    "97180159571fce9bee2ca87e8253d015",
  ],
  [
    "next/UsingReact/useContext_useState/LessonContext.js",
    "71a2145f816448145a7eda7bd1ea7b02",
  ],
  [
    "next/UsingReact/useContext_useState/api.js",
    "07f8daa1e4ce6919338c337ca2095f3a",
  ],
  ["next/console_snippets.js", "91f19fd6230f568c58f8ffd4f3f6e20a"],
  ["next/data.js", "4841c48d219f215a481dac0e9bb80727"],
  ["next/main.html", "f2222f207ab8925f657ece47a546a6ad"],
  ["next/main_and_mujhe.html", "65d950fff183f08c9fe1d9654cbc3d22"],
  ["next/next.css", "0fa5d466d974ca6158fcd38abe6e6484"],
  ["next/next.js", "75e2095ff9fc087c1cc9bb3f55cb63d0"],
  ["next/scripts.js", "658d53964c589789a0429c079c51c01a"],
  ["next/urdu_pronouns.html", "5c0aa2c31ad321f426bda4099ff51759"],
  ["public/about.txt", "e8a8d9b03fa9c4df9d0022f7e5ea9640"],
  ["public/android-chrome-192x192.png", "7beeff66718bcbb5c2351a048e61e20a"],
  ["public/android-chrome-512x512.png", "17d1ab9a67c7b8e4ba53a56dcca6ed7c"],
  ["public/apple-touch-icon.png", "a0fce4a840ac4e13a63e45a4a245b972"],
  ["public/favicon-16x16.png", "fd5aec15168acc52e980a2ca6e4ee9e5"],
  ["public/favicon-32x32.png", "845514f3d5320e3edd90ff71ff9430ce"],
  ["public/favicon.ico", "b097d3b47d154c61267c228c29e52eed"],
  ["public/maskable_icon_x192.png", "13a2a7946b117b2fcca0560265bc5d10"],
  ["script.js", "b73f95c05664f2a9da767b52d3afb7df"],
  ["src/css/prefix_styles.css", "b6878030edfdf490e135daddfd896e73"],
  ["src/css/tab.css", "7917eb496566292d59c086bb27d47261"],
  ["templates.js", "2a03602f3c49787aa161442562cd3393"],
  ["try.html", "7c622bd9f1230e1ba81729c33ffebc55"],
  ["trydata.js", "f94bc83166ee46b5b3b1febc5ab06c9e"],
  ["urdu_flag.jpeg", "75a5dc2736d61f7d24b72b6b25d21d07"],
];
var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status
                    );
                  }

                  return cleanResponse(response).then(function (
                    responseToCache
                  ) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing."
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e
            );
            return fetch(event.request);
          })
      );
    }
  }
});
