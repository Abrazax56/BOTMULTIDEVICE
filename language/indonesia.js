exports.private = () =>{
	return`pc gw`
	}
exports.wait = () => {
    return `Enteni Sedela`
}
exports.ok = () => {
    return `Silahkan Dinikmati sayang🥺❤`
}

exports.err = () => {
    return `Lah kok eror? pasti gara2 ayang niiih😪`
}
exports.erorLink = () => {
    return `kalok ngirim link tuh yang bener!!`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah Sayang Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `Sudah selesai, Ayang~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `isssh ayaaang🥺 kamu kan bukan admin😪`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `aku bukan admin ayang😪`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname}  selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp. 
Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya, 
lapor owner agar segera di perbaiki       
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*Time Server : ${time}*
*Semua Perintah BoT :*

*INFO BOT*
Menampilkan Beberapa Perintah Untuk Memunculkan Beberapa Info Seputar Bot
Berikut Listnya :

1. ${prefix}owner
2. ${prefix}rules
3. ${prefix}sc
4. ${prefix}ping
5. ${prefix}runtime
6. ${prefix}botstatus
7. ${prefix}donate

*OWNER*
Menampilkan Beberapa Perintah Yang Hanya Bisa Di Akses Oleh Owner!
Berikut Listnya :

1. < evaluate
2. > evaluate
3. $ exec
4. => exec
5. ${prefix}setmenu [query]
6. ${prefix}setmenu templateLocation
7. ${prefix}setmenu templateTenor
8. ${prefix}setmenu katalog
9. ${prefix}setmenu katalog2
10. ${prefix}setmenu list
11. ${prefix}setwm packname|author
12. ${prefix}sendsesi
13. ${prefix}listpc
14. ${prefix}listgc
15. ${prefix}broadcast [text]
16. ${prefix}bc [text]
17. ${prefix}bcgc [text]
18. ${prefix}nsfw [on/off]
19. ${prefix}autorespond [on/off]
20. ${prefix}antiviewonce [on/off]
21. ${prefix}join [link]
22. ${prefix}self
23. ${prefix}public [only bot]
24. ${prefix}del [reply pesan bot]
25. ${prefix}setppbot [reply image]

*DATABASE BOT*
Menampilkan Beberapa Perintah Untuk Memunculkan List Database Dari Bot!
Berikut Listnya :

1. ${prefix}setcmd [reply stiker]
2. ${prefix}delcmd [reply stiker]
3. ${prefix}listcmd
4. ${prefix}absen
5. ${prefix}cekabsen
6. ${prefix}deleteabsen
7. ${prefix}absenstart
8. ${prefix}addmsg [nama file]
9. ${prefix}getmsg [nama file]
10. ${prefix}listmsg
11. ${prefix}delmsg [nama file]

*GROUP*
Menampilkan Beberapa Perintah Yang Hanya Bisa Di Pakai Di Group!
Berikut Listnya :

1. ${prefix}listonline
2. ${prefix}sider
3. ${prefix}wm packname|author
4. ${prefix}infochat
5. ${prefix}setdesk [text]
6. ${prefix}setppgrup [reply image]
7. ${prefix}antilink [on/off]
8. ${prefix}revoke
9. ${prefix}leave
10. ${prefix}add [nomornya]
11. ${prefix}kick @tag
12. ${prefix}leave
13. ${prefix}linkgc
14. ${prefix}take packname|author
15. ${prefix}group [open/close]
16. ${prefix}tagall [text]
17. ${prefix}hidetag [text]

*ANIME*
Menampilkan Beberapa Perintah Seputar Anime
Berikut Listnya :

1. ${prefix}quotesanime
2. ${prefix}anime [query]
3. ${prefix}manga [query]
4. ${prefix}character [query]

*TAG*
Menampilkan Beberapa Perintah Untuk Membuat Tag Keren
Berikut Listnya :

1. ${prefix}stickertag
2. ${prefix}videotag [query]
3. ${prefix}vntag [query]
4. ${prefix}imagetag [query]

*STALKING*
Menampilkan Beberapa Perintah Stalking
Berikut Listnya :

1. ${prefix}igstalk [username]
2. ${prefix}ghstalk [username]
3. ${prefix}ytstalk [channel]

*SEARCH*
Menampilkan Beberapa Perintah Untuk Menelusuri Sesuatu Dari Berbagai Sumber
Berikut Listnya :

1. ${prefix}ytsearch [query]
2. ${prefix}wallpaper [query]
3. ${prefix}wikimedia [query]
4. ${prefix}hentai
5. ${prefix}wattpad [query]
6. ${prefix}webtoons [query]
7. ${prefix}drakor [query]
8. ${prefix}pinterest [query]

*CONVERETER*
Menampilkan Beberapa Perintah Untuk Mengonveresikan Media
Berikut Listnya :

1. ${prefix}toaudio [video]
2. ${prefix}tomp3 [video]
3. ${prefix}tovn [video]
4. ${prefix}stiker [reply image]
5. ${prefix}tourl [image/video/stiker]
6. ${prefix}togif [sticker]
7. ${prefix}tomp4 [sticker]
8.${prefix}toimg [reply sticker]

*IMAGE EFFECT*
Menampilkan Beberapa Perintah Untuk Memberikan Efek Pada Gambar
Berikut Listnya :
 
1. ${prefix}wanted [reply image/stiker]
2. ${prefix}utatoo [reply image/stiker]
3. ${prefix}unsharpen [reply image/stiker]
4. ${prefix}thanos [reply image/stiker]
5. ${prefix}sniper [reply image/stiker]
6. ${prefix}sharpen [reply image/stiker]
7. ${prefix}sepia [reply image/stiker]
8. ${prefix}scary [reply image/stiker]
9. ${prefix}rip [reply image/stiker]
10. ${prefix}redple [reply image/stiker]
11. ${prefix}rejected [reply image/stiker]
12. ${prefix}posterize [reply image/stiker]
13. ${prefix}ps4 [reply image/stiker]
14. ${prefix}pixelize [reply image/stiker]
15. ${prefix}missionpassed [reply image/stiker]
16. ${prefix}moustache [reply image/stiker]
17. ${prefix}lookwhatkarenhave [reply image/stiker]
18. ${prefix}jail [reply image/stiker]
19. ${prefix}invert [reply image/stiker]
20. ${prefix}instagram [reply image/stiker]
21. ${prefix}greyscale [reply image/stiker]
22. ${prefix}glitch [reply image/stiker]
23. ${prefix}gay [reply image/stiker]
24. ${prefix}frame [reply image/stiker]
25. ${prefix}fire [reply image/stiker]
26. ${prefix}distort [reply image/stiker]
27. ${prefix}dictator [reply image/stiker]
28. ${prefix}deepfry [reply image/stiker]
29. ${prefix}ddungeon [reply image/stiker]
30. ${prefix}circle [reply image/stiker]
31. ${prefix}challenger [reply image/stiker]
32. ${prefix}burn [reply image/stiker]
33. ${prefix}brazzers [reply image/stiker]
34. ${prefix}beautiful [reply image/stiker]

*STICKER EFFECT*
Menampilkan Beberapa Perintah Untuk Memberikan Efek Pada Sticker
Berikut Listnya :

1. ${prefix}jail [reply image/stiker]
2. ${prefix}red [reply image/stiker]
3. ${prefix}gay [reply image/stiker]
4. ${prefix}bloo [reply image/stiker]
5. ${prefix}blue [reply image/stiker]
6. ${prefix}sepia [reply image/stiker]
7. ${prefix}green [reply image/stiker]
8. ${prefix}glass [reply image/stiker]
9. ${prefix}invert [reply image/stiker]
10. ${prefix}blurple [reply image/stiker]
11. ${prefix}blurple2 [reply image/stiker]
12. ${prefix}wasted [reply image/stiker]
13. ${prefix}passed [reply image/stiker]
14. ${prefix}triggered [reply image/stiker]
15. ${prefix}comrade [reply image/stiker]
16. ${prefix}greyscale [reply image/stiker]
17. ${prefix}threshold [reply image/stiker]
18. ${prefix}brightness [reply image/stiker]
19. ${prefix}invertgreyscale [reply image/stiker]

*DOWNLOADER*
Menampilkan Beberapa Perintah Untuk Mengunduh Media Dari Berbagai Sumber
Berikut Listnya :

1. ${prefix}tiktok [link]
2. ${prefix}tiktoknowm [link]
3. ${prefix}tiktokwm [link]
4. ${prefix}tiktokaudio [link]
5. ${prefix}ytdl [link]
6. ${prefix}play [query]
7. ${prefix}ytmp3 [link]
8. ${prefix}ytshortmp3 [link]
9. ${prefix}ytmp4 [link]
10. ${prefix}ytshorts [link]
11. ${prefix}facebook [link]
12. ${prefix}facebooksd [link]
13. ${prefix}facebookhd [link]
14. ${prefix}fbaudio [link]
15. ${prefix}igstory [username]
16. ${prefix}igdl [link]
17. ${prefix}igphoto [link]
18 .${prefix}igvideo [link]
19. ${prefix}igreels [link]
20. ${prefix}igtv [link]
21. ${prefix}soundcloud [link]
22. ${prefix}gitclone [link repo]
23.  ${prefix}gitrepo [username repo branch]
24. ${prefix}mediafire [link]
25. ${prefix}twitter link

*PRIMBON (NEW)*
Menampilkan Beberapa List Perintah Primbon
Berikut Listnya :

1. ${prefix}nomorhoki 882160181655
2. ${prefix}artimimpi [query]
3. ${prefix}artinama [query]
4. ${prefix}ramaljodoh
5. ${prefix}ramaljodohbali
6. ${prefix}suamiistri
7. ${prefix}ramalcinta
8. ${prefix}cocoknama
9. ${prefix}pasangan
10. ${prefix}jadiannikah
11. ${prefix}sifatusaha
12. ${prefix}rezeki
13. ${prefix}pekerjaan
14. ${prefix}nasib
15. ${prefix}penyakit
16. ${prefix}tarot
17. ${prefix}fengshui
18. ${prefix}haribaik
19. ${prefix}harisangar
20. ${prefix}harisial
21. ${prefix}nagahari
22. ${prefix}arahrezeki
23. ${prefix}peruntungan
24. ${prefix}weton
25. ${prefix}karakter
26. ${prefix}keberuntungan
27. ${prefix}memancing
28. ${prefix}masasubur
29. ${prefix}zodiak 
30. ${prefix}shio [query]

*RANDOM ANIME*
Menampilkan Beberapa Perintah Random Anime
Berikut Listnya :

1. ${prefix}loli
2. ${prefix}neko
3. ${prefix}waifu
4. ${prefix}shinobu
5. ${prefix}megumin
6. ${prefix}bully
7. ${prefix}cuddle
8. ${prefix}cry
9. ${prefix}hug
10. ${prefix}awoo
11. ${prefix}kiss
12. ${prefix}lick
13. ${prefix}pat
14. ${prefix}smug
15. ${prefix}bonk
16. ${prefix}yeet
17. ${prefix}blush
18. ${prefix}smile
19. ${prefix}wave
20. ${prefix}highfive
21. ${prefix}handhold
22. ${prefix}nom
23. ${prefix}bite
24. ${prefix}glomp
25. ${prefix}slap
26. ${prefix}kill
27. ${prefix}happy
28. ${prefix}wink
29. ${prefix}poke
30. ${prefix}dance
31. ${prefix}cringe

*NSFW*
Menamlilkan Beberapa Perintah 18+ atau Nsfw
Berikut Listnya :

1. ${prefix}ahegao
2. ${prefix}ass
3. ${prefix}bdsm
4. ${prefix}blowjob
5. ${prefix}cuckold
6. ${prefix}cum
7. ${prefix}ero
8. ${prefix}femdom
9. ${prefix}foot
10. ${prefix}gangbang
11. ${prefix}glasses
12. ${prefix}jahy
13. ${prefix}manga
14. ${prefix}masturbation
15. ${prefix}neko
16. ${prefix}orgy
17. ${prefix}panties
18. ${prefix}pussy
20. ${prefix}tentacles
21. ${prefix}thighs
22. ${prefix}yuri
23. ${prefix}feet
24. ${prefix}lewdkemo
25. ${prefix}woof
26. ${prefix}gasm
27. ${prefix}solo
28. ${prefix}8ball
29. ${prefix}goose
30. ${prefix}avatar
31. ${prefix}hololewd
32. ${prefix}gecg
33. ${prefix}holo
34. ${prefix}fox_girl
35. ${prefix}tits
36. ${prefix}eroyuri
37. ${prefix}holoyero
38. ${prefix}lizard
39. ${prefix}keta
40. ${prefix}eron
41. ${prefix}erok
42. ${prefix}kemonomimi
43. ${prefix}cum_jpg
44. ${prefix}nsfw_avatar
45. ${prefix}erofeet
46. ${prefix}meow
47. ${prefix}wallpaper
48. ${prefix}waifu
49. ${prefix}trap
50. ${prefix}lewd
51. ${prefix}pussy_jpg
52. ${prefix}futanari
53. ${prefix}lewdk
54. ${prefix}solog
55. ${prefix}smug
56. ${prefix}cum
57. ${prefix}slap
58. ${prefix}les
59. ${prefix}erokemo
60. ${prefix}bj
61. ${prefix}pwankg
62. ${prefix}pat
63. ${prefix}poke
64. ${prefix}feed
65. ${prefix}nsfw_neko_gif
66. ${prefix}pussy
67. ${prefix}feetg
68. ${prefix}baka
69. ${prefix}hug
70. ${prefix}kiss
71. ${prefix}tickle
72. ${prefix}spank
73. ${prefix}kuni
74. ${prefix}classic
75. ${prefix}boobs
76. ${prefix}anal
77. ${prefix}ngif
78. ${prefix}cuddle
79. ${prefix}zettai

*TEXTPRO*
Menampilkan Beberapa Perintah Untuk Membuat Text Keren
Berikut Listnya :

1. ${prefix}halloween2 text|text2
2. ${prefix}horror text|text2
3. ${prefix}game8bit text|text2
4. ${prefix}layered text|text2
5. ${prefix}glitch2 text|text2
6. ${prefix}coolg text|text2
7. ${prefix}coolwg text|text2
8. ${prefix}realistic text|text2
9. ${prefix}space3d text|text2
10. ${prefix}gtiktok text|text2
11. ${prefix}stone text|text2
12. ${prefix}marvel text|text2
13. ${prefix}marvel2 text|text2
14. ${prefix}pornhub text|text2
15. ${prefix}avengers text|text2
16. ${prefix}metalr text|text2
17. ${prefix}metalg text|text2
18. ${prefix}metalg2 text|text2
19. ${prefix}halloween2 text|text2
20. ${prefix}lion text|text2
21. ${prefix}wolf_bw text|text2
22. ${prefix}wolf_g text|text2
23. ${prefix}ninja text|text2
24. ${prefix}3dsteel text|text2
25. ${prefix}horror2 text|text2
26. ${prefix}lava text|text2
27. ${prefix}bagel text|text2
28. ${prefix}blackpink text
29. ${prefix}rainbow2 text
30. ${prefix}water_pipe text
31. ${prefix}halloween text
32. ${prefix}sketch text
33. ${prefix}sircuit text
34. ${prefix}discovery text
35. ${prefix}metallic2 text
36. ${prefix}fiction text
37. ${prefix}demon text
38.  ${prefix}transformer text
39. ${prefix}berry text
40. ${prefix}thunder text
41. ${prefix}magma text
42. ${prefix}3dstone text
43. ${prefix}neon text
44. ${prefix}glitch text
45. ${prefix}harry_potter text
46. ${prefix}embossed text
47. ${prefix}broken text
48. ${prefix}papercut text
49. ${prefix}gradient text
50. ${prefix}glossy text
51. ${prefix}watercolor text
52. ${prefix}multicolor text
53. ${prefix}neon_devil text
54. ${prefix}underwater text
55. ${prefix}bear text
56. ${prefix}wonderfulg text
57. ${prefix}christmas text
58. ${prefix}neon_light text
59. ${prefix}snow text
60. ${prefix}cloudsky text
61. ${prefix}luxury2 text
62. ${prefix}gradient2 text
63. ${prefix}summer text
64. ${prefix}writing text
65. ${prefix}engraved text
66. ${prefix}summery text
67. ${prefix}3dglue text
68. ${prefix}metaldark text
69. ${prefix}neonlight text
70. ${prefix}oscar text
71. ${prefix}minion text
72. ${prefix}holographic text
73. ${prefix}purple text
74. ${prefix}glossyb text
75. ${prefix}deluxe2 text
76. ${prefix}glossyc text
77. ${prefix}fabric text
78. ${prefix}neonc text
79. ${prefix}newyear text
80. ${prefix}newyear2 text
81. ${prefix}metals text
82. ${prefix}xmas text
83. ${prefix}blood text
84. ${prefix}darkg text
85. ${prefix}joker text
86. ${prefix}wicker text
87. ${prefix}natural text
88. ${prefix}firework text
89. ${prefix}skeleton text
90. ${prefix}balloon text
91. ${prefix}balloon2 text
92. ${prefix}balloon3 text
93. ${prefix}balloon4 text
94. ${prefix}balloon5 text
95. ${prefix}balloon6 text
96. ${prefix}balloon7 text
97. ${prefix}steel text
98. ${prefix}gloss text
99. ${prefix}denim text
100. ${prefix}decorate text
101. ${prefix}decorate2 text
102. ${prefix}peridot text
103. ${prefix}rock text
104. ${prefix}glass text
105. ${prefix}glass2 text
106. ${prefix}glass3 text
107. ${prefix}glass4 text
108. ${prefix}glass5 text
109. ${prefix}glass6 text
110. ${prefix}glass7 text
111. ${prefix}glass8 text
112. ${prefix}captain_as2 text
113. ${prefix}robot text
114. ${prefix}equalizer text
115. ${prefix}toxic text
116. ${prefix}sparkling text
117. ${prefix}sparkling2 text
118. ${prefix}sparkling3 text
119. ${prefix}sparkling4 text
120. ${prefix}sparkling5 text
121. ${prefix}sparkling6 text
122. ${prefix}sparkling7 text
123. ${prefix}decorative text
124. ${prefix}chocolate text
125. ${prefix}strawberry text
126. ${prefix}koifish text
127. ${prefix}bread text
128. ${prefix}matrix text
129. ${prefix}blood2 text
130. ${prefix}neonligth2 text
131. ${prefix}thunder2 text
132. ${prefix}3dbox text
133. ${prefix}neon2 text
134. ${prefix}roadw text
135. ${prefix}bokeh text
136. ${prefix}gneon text
137. ${prefix}advanced text
138. ${prefix}dropwater text
139. ${prefix}wall text
140. ${prefix}chrismast text
141. ${prefix}honey text
142. ${prefix}drug text
143. ${prefix}marble text
144. ${prefix}marble2 text
145. ${prefix}ice text
146. ${prefix}juice text
147. ${prefix}rusty text
148. ${prefix}abstra text
149. ${prefix}biscuit text
150. ${prefix}wood text
151. ${prefix}scifi text
152. ${prefix}metalr text
153. ${prefix}purpleg text
154. ${prefix}shiny text 
155. ${prefix}jewelry text
156. ${prefix}jewelry2 text
157. ${prefix}jewelry3 text
158. ${prefix}jewelry4 text
159. ${prefix}jewelry5 text
160. ${prefix}jewelry6 text
161. ${prefix}jewelry7 text
162. ${prefix}jewelry8 text
163. ${prefix}metalh text
164. ${prefix}golden text
165. ${prefix}glitter text
166. ${prefix}glitter2 text
167. ${prefix}glitter3 text
168. ${prefix}glitter4 text
169. ${prefix}glitter5 text
170. ${prefix}glitter6 text
171. ${prefix}glitter7 text
172. ${prefix}metale text
173. ${prefix}carbon text
174. ${prefix}candy text
175. ${prefix}metalb text
176. ${prefix}gemb text
177. ${prefix}3dchrome text
178. ${prefix}metalb2 text
179. ${prefix}metalg text
180. ${prefix}metalg text

*OTHERS*
Menampilkan Beberapa Perintah Lain2
Berikut Listnya :

1. ${prefix}afk [reason]
2. ${prefix}translate kode_bahasa text
3. ${prefix}kalkulator [query]
4. ${prefix}smeme [text]
5. ${prefix}smeme2 [text|text]
6. ${prefix}memegen [text|text]

*GAME*
Menampilkan Beberapa Perintah Game Untuk Hiburan
Berikut Listnya :

1. ${prefix}kuismath
2. ${prefix}tebak [option]
3. ${prefix}tekateki
4. ${prefix}susunkata
5. ${prefix}caklontong

*ASUPAN*
Menampilkan Beberapa Perintah Asupan/Pelipur Mata
Berikut Listnya :

1. ${prefix}chika
2. ${prefix}delvira
3. ${prefix}ayu
4. ${prefix}bunga
5. ${prefix}aura
6. ${prefix}nisa
7. ${prefix}ziva
8. ${prefix}yana
9. ${prefix}viona
10. ${prefix}syania
11. ${prefix}riri
12. ${prefix}syifa
13. ${prefix}mama_gina
14. ${prefix}alcakenya
15. ${prefix}mangayutri
16. ${prefix}rikagusriani
17. ${prefix}asupan
18. ${prefix}bocil
19. ${prefix}geayubi
20. ${prefix}santuy
21. ${prefix}ukhty
22. ${prefix}syifa

*TELEGRAM STICKER*
Menampilkan Beberapa Perintah Random Sticker Telegram
Berikut Listnya :

1. ${prefix}awoawo
2. ${prefix}benedict
3. ${prefix}chat
4. ${prefix}dbfly
5. ${prefix}dino_kuning
6. ${prefix}doge
7. ${prefix}gojosatoru
8. ${prefix}hope_boy
9. ${prefix}jisoo
10. ${prefix}kr_robot
11. ${prefix}kucing
12. ${prefix}lonte
13. ${prefix}manusia_lidi
14. ${prefix}menjamet
15. ${prefix}meow
16. ${prefix}nicholas
17. ${prefix}patrick
18. ${prefix}popoci
19. ${prefix}sponsbob
20. ${prefix}kawan_sponsbob
21. ${prefix}tyni
,
*RANDOM CEWEK*
Menampilkan Beberapa Perintah Random Cecan Dari Berbagai Negara
Berikut Listnya :

1. ${prefix}china 
2. ${prefix}indonesia 
3. ${prefix}malaysia 
4. ${prefix}thailand 
5. ${prefix}korea 
6. ${prefix}japan 
7. ${prefix}vietnam 
8. ${prefix}jenni 
9. ${prefix}jiso 
10. ${prefix}lisa  
11. ${prefix}rose

*TERIMAKASIH UNTUK*

*ALLAH Swt*
Fatih A.
Ferdi
DikaArdnt
Mhankbarbar
Nurutomo
Rashid
ZeeoneOfc (Recoder 1)
Ahmad Beni Rusli (Recoder 2)
Penyedia Module
And All Support
    `
}

exports.rules = (prefix) => {
    return `
*SYARAT DAN PERATURAN*

1. Jangan spam bot.
2. Jangan telepon bot.
3. Jangan mengeksploitasi bot.
4. Jangan menculik Bot Tanpa Seizin Owner

🗣Bot tidak atau lambat merespon ?
👤Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules!!

🗣Dimana saya bisa mendapatkan Script dari bot ini ?
👤Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗣Boleh saya menambah ke grup?
👤Untuk sementara bot dalam status free to add.

🗣Prefixnya apa ya?
👤Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗣Kak, kok syaa chat owner tidak direspon?
👤Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!
`
}
exports.welcome = () =>{
	return`*Intro Dulu Lah Kak~*
	
1. Nama :
2. Asal Kota :
3. Umur :
4. Gender :
5. Alasan Bergabung :
6. Agama :

Jangan Lupa Baca Peraturan Grup Ya Kak`
}
exports.leave = () =>{
	return`Aduh Kok Keluar
Goodbye`
}
exports.source = () =>{
return`*SOURCE CODE*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/Abrazax56
`
}
exports.tos = (ownernomer) => {
    return `
*DONASI*

Hai kak 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`*INFO BOT*
Menampilkan Beberapa Perintah Untuk Memunculkan Beberapa Info Seputar Bot
Berikut Listnya :

1. ${prefix}owner
2. ${prefix}rules
3. ${prefix}sc
4. ${prefix}ping
5. ${prefix}runtime
6. ${prefix}botstatus
7. ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`*OWNER*
Menampilkan Beberapa Perintah Yang Hanya Bisa Di Akses Oleh Owner!
Berikut Listnya :

1. < evaluate
2. > evaluate
3. $ exec
4. => exec
5. ${prefix}setmenu [query]
6. ${prefix}setmenu templateLocation
7. ${prefix}setmenu templateTenor
8. ${prefix}setmenu katalog
9. ${prefix}setmenu katalog2
10. ${prefix}setmenu list
11. ${prefix}setwm packname|author
12. ${prefix}sendsesi
13. ${prefix}listpc
14. ${prefix}listgc
15. ${prefix}broadcast [text]
16. ${prefix}bc [text]
17. ${prefix}bcgc [text]
18. ${prefix}nsfw [on/off]
19. ${prefix}autorespond [on/off]
20. ${prefix}antiviewonce [on/off]
21. ${prefix}join [link]
22. ${prefix}self
23. ${prefix}public [only bot]
24. ${prefix}del [reply pesan bot]
25. ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`*DATABASE BOT*
Menampilkan Beberapa Perintah Untuk Memunculkan List Database Dari Bot!
Berikut Listnya :

1. ${prefix}setcmd [reply stiker]
2. ${prefix}delcmd [reply stiker]
3. ${prefix}listcmd
4. ${prefix}absen
5. ${prefix}cekabsen
6. ${prefix}deleteabsen
7. ${prefix}absenstart
8. ${prefix}addmsg [nama file]
9. ${prefix}getmsg [nama file]
10. ${prefix}listmsg
11. ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`*GROUP*
Menampilkan Beberapa Perintah Yang Hanya Bisa Di Pakai Di Group!
Berikut Listnya :

1. ${prefix}listonline
2. ${prefix}sider
3. ${prefix}wm packname|author
4. ${prefix}infochat
5. ${prefix}setdesk [text]
6. ${prefix}setppgrup [reply image]
7. ${prefix}antilink [on/off]
8. ${prefix}revoke
9. ${prefix}leave
10. ${prefix}add [nomornya]
11. ${prefix}kick @tag
12. ${prefix}leave
13. ${prefix}linkgc
14. ${prefix}take packname|author
15. ${prefix}group [open/close]
16. ${prefix}tagall [text]
17. ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*ANIME*
Menampilkan Beberapa Perintah Seputar Anime
Berikut Listnya :

1. ${prefix}quotesanime
2. ${prefix}anime [query]
3. ${prefix}manga [query]
4. ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`*TAG*
Menampilkan Beberapa Perintah Untuk Membuat Tag Keren
Berikut Listnya :

1. ${prefix}stickertag
2. ${prefix}videotag [query]
3. ${prefix}vntag [query]
4. ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`*STALKING*
Menampilkan Beberapa Perintah Stalking
Berikut Listnya :

1. ${prefix}igstalk [username]
2. ${prefix}ghstalk [username]
3. ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`*SEARCH*
Menampilkan Beberapa Perintah Untuk Menelusuri Sesuatu Dari Berbagai Sumber
Berikut Listnya :

1. ${prefix}ytsearch [query]
2. ${prefix}wallpaper [query]
3. ${prefix}wikimedia [query]
4. ${prefix}hentai
5. ${prefix}wattpad [query]
6. ${prefix}webtoons [query]
7. ${prefix}drakor [query]
8. ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*CONVERETER*
Menampilkan Beberapa Perintah Untuk Mengonveresikan Media
Berikut Listnya :

1. ${prefix}toaudio [video]
2. ${prefix}tomp3 [video]
3. ${prefix}tovn [video]
4. ${prefix}stiker [reply image]
5. ${prefix}tourl [image/video/stiker]
6. ${prefix}togif [sticker]
7. ${prefix}tomp4 [sticker]
8.${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*IMAGE EFFECT*
Menampilkan Beberapa Perintah Untuk Memberikan Efek Pada Gambar
Berikut Listnya :
 
1. ${prefix}wanted [reply image/stiker]
2. ${prefix}utatoo [reply image/stiker]
3. ${prefix}unsharpen [reply image/stiker]
4. ${prefix}thanos [reply image/stiker]
5. ${prefix}sniper [reply image/stiker]
6. ${prefix}sharpen [reply image/stiker]
7. ${prefix}sepia [reply image/stiker]
8. ${prefix}scary [reply image/stiker]
9. ${prefix}rip [reply image/stiker]
10. ${prefix}redple [reply image/stiker]
11. ${prefix}rejected [reply image/stiker]
12. ${prefix}posterize [reply image/stiker]
13. ${prefix}ps4 [reply image/stiker]
14. ${prefix}pixelize [reply image/stiker]
15. ${prefix}missionpassed [reply image/stiker]
16. ${prefix}moustache [reply image/stiker]
17. ${prefix}lookwhatkarenhave [reply image/stiker]
18. ${prefix}jail [reply image/stiker]
19. ${prefix}invert [reply image/stiker]
20. ${prefix}instagram [reply image/stiker]
21. ${prefix}greyscale [reply image/stiker]
22. ${prefix}glitch [reply image/stiker]
23. ${prefix}gay [reply image/stiker]
24. ${prefix}frame [reply image/stiker]
25. ${prefix}fire [reply image/stiker]
26. ${prefix}distort [reply image/stiker]
27. ${prefix}dictator [reply image/stiker]
28. ${prefix}deepfry [reply image/stiker]
29. ${prefix}ddungeon [reply image/stiker]
30. ${prefix}circle [reply image/stiker]
31. ${prefix}challenger [reply image/stiker]
32. ${prefix}burn [reply image/stiker]
33. ${prefix}brazzers [reply image/stiker]
34. ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`*STICKER EFFECT*
Menampilkan Beberapa Perintah Untuk Memberikan Efek Pada Sticker
Berikut Listnya :

1. ${prefix}jail [reply image/stiker]
2. ${prefix}red [reply image/stiker]
3. ${prefix}gay [reply image/stiker]
4. ${prefix}bloo [reply image/stiker]
5. ${prefix}blue [reply image/stiker]
6. ${prefix}sepia [reply image/stiker]
7. ${prefix}green [reply image/stiker]
8. ${prefix}glass [reply image/stiker]
9. ${prefix}invert [reply image/stiker]
10. ${prefix}blurple [reply image/stiker]
11. ${prefix}blurple2 [reply image/stiker]
12. ${prefix}wasted [reply image/stiker]
13. ${prefix}passed [reply image/stiker]
14. ${prefix}triggered [reply image/stiker]
15. ${prefix}comrade [reply image/stiker]
16. ${prefix}greyscale [reply image/stiker]
17. ${prefix}threshold [reply image/stiker]
18. ${prefix}brightness [reply image/stiker]
19. ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`*DOWNLOADER*
Menampilkan Beberapa Perintah Untuk Mengunduh Media Dari Berbagai Sumber
Berikut Listnya :

1. ${prefix}tiktok [link]
2. ${prefix}tiktoknowm [link]
3. ${prefix}tiktokwm [link]
4. ${prefix}tiktokaudio [link]
5. ${prefix}ytdl [link]
6. ${prefix}play [query]
7. ${prefix}ytmp3 [link]
8. ${prefix}ytshortmp3 [link]
9. ${prefix}ytmp4 [link]
10. ${prefix}ytshorts [link]
11. ${prefix}facebook [link]
12. ${prefix}facebooksd [link]
13. ${prefix}facebookhd [link]
14. ${prefix}fbaudio [link]
15. ${prefix}igstory [username]
16. ${prefix}igdl [link]
17. ${prefix}igphoto [link]
18 .${prefix}igvideo [link]
19. ${prefix}igreels [link]
20. ${prefix}igtv [link]
21. ${prefix}soundcloud [link]
22. ${prefix}gitclone [link repo]
23.  ${prefix}gitrepo [username repo branch]
24. ${prefix}mediafire [link]
25. ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*RANDOM ANIME*
Menampilkan Beberapa Perintah Random Anime
Berikut Listnya :

1. ${prefix}loli
2. ${prefix}neko
3. ${prefix}waifu
4. ${prefix}shinobu
5. ${prefix}megumin
6. ${prefix}bully
7. ${prefix}cuddle
8. ${prefix}cry
9. ${prefix}hug
10. ${prefix}awoo
11. ${prefix}kiss
12. ${prefix}lick
13. ${prefix}pat
14. ${prefix}smug
15. ${prefix}bonk
16. ${prefix}yeet
17. ${prefix}blush
18. ${prefix}smile
19. ${prefix}wave
20. ${prefix}highfive
21. ${prefix}handhold
22. ${prefix}nom
23. ${prefix}bite
24. ${prefix}glomp
25. ${prefix}slap
26. ${prefix}kill
27. ${prefix}happy
28. ${prefix}wink
29. ${prefix}poke
30. ${prefix}dance
31. ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`*NSFW*
Menamlilkan Beberapa Perintah 18+ atau Nsfw
Berikut Listnya :

1. ${prefix}ahegao
2. ${prefix}ass
3. ${prefix}bdsm
4. ${prefix}blowjob
5. ${prefix}cuckold
6. ${prefix}cum
7. ${prefix}ero
8. ${prefix}femdom
9. ${prefix}foot
10. ${prefix}gangbang
11. ${prefix}glasses
12. ${prefix}jahy
13. ${prefix}manga
14. ${prefix}masturbation
15. ${prefix}neko
16. ${prefix}orgy
17. ${prefix}panties
18. ${prefix}pussy
20. ${prefix}tentacles
21. ${prefix}thighs
22. ${prefix}yuri
23. ${prefix}feet
24. ${prefix}lewdkemo
25. ${prefix}woof
26. ${prefix}gasm
27. ${prefix}solo
28. ${prefix}8ball
29. ${prefix}goose
30. ${prefix}avatar
31. ${prefix}hololewd
32. ${prefix}gecg
33. ${prefix}holo
34. ${prefix}fox_girl
35. ${prefix}tits
36. ${prefix}eroyuri
37. ${prefix}holoyero
38. ${prefix}lizard
39. ${prefix}keta
40. ${prefix}eron
41. ${prefix}erok
42. ${prefix}kemonomimi
43. ${prefix}cum_jpg
44. ${prefix}nsfw_avatar
45. ${prefix}erofeet
46. ${prefix}meow
47. ${prefix}wallpaper
48. ${prefix}waifu
49. ${prefix}trap
50. ${prefix}lewd
51. ${prefix}pussy_jpg
52. ${prefix}futanari
53. ${prefix}lewdk
54. ${prefix}solog
55. ${prefix}smug
56. ${prefix}cum
57. ${prefix}slap
58. ${prefix}les
59. ${prefix}erokemo
60. ${prefix}bj
61. ${prefix}pwankg
62. ${prefix}pat
63. ${prefix}poke
64. ${prefix}feed
65. ${prefix}nsfw_neko_gif
66. ${prefix}pussy
67. ${prefix}feetg
68. ${prefix}baka
69. ${prefix}hug
70. ${prefix}kiss
71. ${prefix}tickle
72. ${prefix}spank
73. ${prefix}kuni
74. ${prefix}classic
75. ${prefix}boobs
76. ${prefix}anal
77. ${prefix}ngif
78. ${prefix}cuddle
79. ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`*TEXTPRO*
Menampilkan Beberapa Perintah Untuk Membuat Text Keren
Berikut Listnya :

1. ${prefix}halloween2 text|text2
2. ${prefix}horror text|text2
3. ${prefix}game8bit text|text2
4. ${prefix}layered text|text2
5. ${prefix}glitch2 text|text2
6. ${prefix}coolg text|text2
7. ${prefix}coolwg text|text2
8. ${prefix}realistic text|text2
9. ${prefix}space3d text|text2
10. ${prefix}gtiktok text|text2
11. ${prefix}stone text|text2
12. ${prefix}marvel text|text2
13. ${prefix}marvel2 text|text2
14. ${prefix}pornhub text|text2
15. ${prefix}avengers text|text2
16. ${prefix}metalr text|text2
17. ${prefix}metalg text|text2
18. ${prefix}metalg2 text|text2
19. ${prefix}halloween2 text|text2
20. ${prefix}lion text|text2
21. ${prefix}wolf_bw text|text2
22. ${prefix}wolf_g text|text2
23. ${prefix}ninja text|text2
24. ${prefix}3dsteel text|text2
25. ${prefix}horror2 text|text2
26. ${prefix}lava text|text2
27. ${prefix}bagel text|text2
28. ${prefix}blackpink text
29. ${prefix}rainbow2 text
30. ${prefix}water_pipe text
31. ${prefix}halloween text
32. ${prefix}sketch text
33. ${prefix}sircuit text
34. ${prefix}discovery text
35. ${prefix}metallic2 text
36. ${prefix}fiction text
37. ${prefix}demon text
38.  ${prefix}transformer text
39. ${prefix}berry text
40. ${prefix}thunder text
41. ${prefix}magma text
42. ${prefix}3dstone text
43. ${prefix}neon text
44. ${prefix}glitch text
45. ${prefix}harry_potter text
46. ${prefix}embossed text
47. ${prefix}broken text
48. ${prefix}papercut text
49. ${prefix}gradient text
50. ${prefix}glossy text
51. ${prefix}watercolor text
52. ${prefix}multicolor text
53. ${prefix}neon_devil text
54. ${prefix}underwater text
55. ${prefix}bear text
56. ${prefix}wonderfulg text
57. ${prefix}christmas text
58. ${prefix}neon_light text
59. ${prefix}snow text
60. ${prefix}cloudsky text
61. ${prefix}luxury2 text
62. ${prefix}gradient2 text
63. ${prefix}summer text
64. ${prefix}writing text
65. ${prefix}engraved text
66. ${prefix}summery text
67. ${prefix}3dglue text
68. ${prefix}metaldark text
69. ${prefix}neonlight text
70. ${prefix}oscar text
71. ${prefix}minion text
72. ${prefix}holographic text
73. ${prefix}purple text
74. ${prefix}glossyb text
75. ${prefix}deluxe2 text
76. ${prefix}glossyc text
77. ${prefix}fabric text
78. ${prefix}neonc text
79. ${prefix}newyear text
80. ${prefix}newyear2 text
81. ${prefix}metals text
82. ${prefix}xmas text
83. ${prefix}blood text
84. ${prefix}darkg text
85. ${prefix}joker text
86. ${prefix}wicker text
87. ${prefix}natural text
88. ${prefix}firework text
89. ${prefix}skeleton text
90. ${prefix}balloon text
91. ${prefix}balloon2 text
92. ${prefix}balloon3 text
93. ${prefix}balloon4 text
94. ${prefix}balloon5 text
95. ${prefix}balloon6 text
96. ${prefix}balloon7 text
97. ${prefix}steel text
98. ${prefix}gloss text
99. ${prefix}denim text
100. ${prefix}decorate text
101. ${prefix}decorate2 text
102. ${prefix}peridot text
103. ${prefix}rock text
104. ${prefix}glass text
105. ${prefix}glass2 text
106. ${prefix}glass3 text
107. ${prefix}glass4 text
108. ${prefix}glass5 text
109. ${prefix}glass6 text
110. ${prefix}glass7 text
111. ${prefix}glass8 text
112. ${prefix}captain_as2 text
113. ${prefix}robot text
114. ${prefix}equalizer text
115. ${prefix}toxic text
116. ${prefix}sparkling text
117. ${prefix}sparkling2 text
118. ${prefix}sparkling3 text
119. ${prefix}sparkling4 text
120. ${prefix}sparkling5 text
121. ${prefix}sparkling6 text
122. ${prefix}sparkling7 text
123. ${prefix}decorative text
124. ${prefix}chocolate text
125. ${prefix}strawberry text
126. ${prefix}koifish text
127. ${prefix}bread text
128. ${prefix}matrix text
129. ${prefix}blood2 text
130. ${prefix}neonligth2 text
131. ${prefix}thunder2 text
132. ${prefix}3dbox text
133. ${prefix}neon2 text
134. ${prefix}roadw text
135. ${prefix}bokeh text
136. ${prefix}gneon text
137. ${prefix}advanced text
138. ${prefix}dropwater text
139. ${prefix}wall text
140. ${prefix}chrismast text
141. ${prefix}honey text
142. ${prefix}drug text
143. ${prefix}marble text
144. ${prefix}marble2 text
145. ${prefix}ice text
146. ${prefix}juice text
147. ${prefix}rusty text
148. ${prefix}abstra text
149. ${prefix}biscuit text
150. ${prefix}wood text
151. ${prefix}scifi text
152. ${prefix}metalr text
153. ${prefix}purpleg text
154. ${prefix}shiny text 
155. ${prefix}jewelry text
156. ${prefix}jewelry2 text
157. ${prefix}jewelry3 text
158. ${prefix}jewelry4 text
159. ${prefix}jewelry5 text
160. ${prefix}jewelry6 text
161. ${prefix}jewelry7 text
162. ${prefix}jewelry8 text
163. ${prefix}metalh text
164. ${prefix}golden text
165. ${prefix}glitter text
166. ${prefix}glitter2 text
167. ${prefix}glitter3 text
168. ${prefix}glitter4 text
169. ${prefix}glitter5 text
170. ${prefix}glitter6 text
171. ${prefix}glitter7 text
172. ${prefix}metale text
173. ${prefix}carbon text
174. ${prefix}candy text
175. ${prefix}metalb text
176. ${prefix}gemb text
177. ${prefix}3dchrome text
178. ${prefix}metalb2 text
179. ${prefix}metalg text
180. ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`*OTHERS*
Menampilkan Beberapa Perintah Lain2
Berikut Listnya :

1. ${prefix}afk [reason]
2. ${prefix}translate kode_bahasa text
3. ${prefix}kalkulator [query]
4. ${prefix}smeme [text]
5. ${prefix}smeme2 [text|text]
6. ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`*GAME*
Menampilkan Beberapa Perintah Game Untuk Hiburan
Berikut Listnya :

1. ${prefix}kuismath
2. ${prefix}tebak [option]
3. ${prefix}tekateki
4. ${prefix}susunkata
5. ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`*ASUPAN*
Menampilkan Beberapa Perintah Asupan/Pelipur Mata
Berikut Listnya :

1. ${prefix}chika
2. ${prefix}delvira
3. ${prefix}ayu
4. ${prefix}bunga
5. ${prefix}aura
6. ${prefix}nisa
7. ${prefix}ziva
8. ${prefix}yana
9. ${prefix}viona
10. ${prefix}syania
11. ${prefix}riri
12. ${prefix}syifa
13. ${prefix}mama_gina
14. ${prefix}alcakenya
15. ${prefix}mangayutri
16. ${prefix}rikagusriani
17. ${prefix}asupan
18. ${prefix}bocil
19. ${prefix}geayubi
20. ${prefix}santuy
21. ${prefix}ukhty
22. ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`*RANDOM CEWEK*
Menampilkan Beberapa Perintah Random Cecan Dari Berbagai Negara
Berikut Listnya :

1. ${prefix}china 
2. ${prefix}indonesia 
3. ${prefix}malaysia 
4. ${prefix}thailand 
5. ${prefix}korea 
6. ${prefix}japan 
7. ${prefix}vietnam 
8. ${prefix}jenni 
9. ${prefix}jiso 
10. ${prefix}lisa  
11. ${prefix}rose
`
}

exports.tqto = () =>{
	return`*TERIMAKASIH UNTUK*

*ALLAH Swt*
Fatih A.
Ferdi
DikaArdnt
Mhankbarbar
Nurutomo
Rashid
ZeeoneOfc (Recoder 1)
Ahmad Beni Rusli (Recoder 2)
Penyedia Module
And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`*PRIMBON (NEW)*
Menampilkan Beberapa List Perintah Primbon
Berikut Listnya :

1. ${prefix}nomorhoki 882160181655
2. ${prefix}artimimpi [query]
3. ${prefix}artinama [query]
4. ${prefix}ramaljodoh
5. ${prefix}ramaljodohbali
6. ${prefix}suamiistri
7. ${prefix}ramalcinta
8. ${prefix}cocoknama
9. ${prefix}pasangan
10. ${prefix}jadiannikah
11. ${prefix}sifatusaha
12. ${prefix}rezeki
13. ${prefix}pekerjaan
14. ${prefix}nasib
15. ${prefix}penyakit
16. ${prefix}tarot
17. ${prefix}fengshui
18. ${prefix}haribaik
19. ${prefix}harisangar
20. ${prefix}harisial
21. ${prefix}nagahari
22. ${prefix}arahrezeki
23. ${prefix}peruntungan
24. ${prefix}weton
25. ${prefix}karakter
26. ${prefix}keberuntungan
27. ${prefix}memancing
28. ${prefix}masasubur
29. ${prefix}zodiak 
30. ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`*TELEGRAM STICKER*
Menampilkan Beberapa Perintah Random Sticker Telegram
Berikut Listnya :

1. ${prefix}awoawo
2. ${prefix}benedict
3. ${prefix}chat
4. ${prefix}dbfly
5. ${prefix}dino_kuning
6. ${prefix}doge
7. ${prefix}gojosatoru
8. ${prefix}hope_boy
9. ${prefix}jisoo
10. ${prefix}kr_robot
11. ${prefix}kucing
12. ${prefix}lonte
13. ${prefix}manusia_lidi
14. ${prefix}menjamet
15. ${prefix}meow
16. ${prefix}nicholas
17. ${prefix}patrick
18. ${prefix}popoci
19. ${prefix}sponsbob
20. ${prefix}kawan_sponsbob
21. ${prefix}tyni
`}