/*
find(selektor)				= Menghasilkan elemen-elemen sesuai selektor, dimulai dari element-element objek (bukan dari root)
children([selektor])		= Menyerupai find() tetapi elemen yang dihasilkan terbatas pada keturunan pertama (anak langsung). Dala hal ini selektor bersift opsional(bertindak sebagai filter)
parents([selektor])			= Memperoleh pendahulu setiap elemen, bisa difilter dengan selektor
parentsUntil(selektor)		= Memperoleh pendahulu setiap elemen hingga selektor dijumpai, 
parent([selektor])			= Memperoleh orangtuan setiap elemen objek
closest([selektor])			= Memperoleh elemen pertama yang cocok dengan selektor, dimulai dari elemen-elemen objek dan meunuju pendahulunya
siblings([selektor])		= Memperoeh saudara setiap elemen objek 
prev([selektor])			= Memperoleh kakak yang tepat mendahului elemen-elemen objek
prevAll([selektor])			= Memperoleh semua kakak elemen-elemen objek 
prevUntil(selektor)			= Memperoleh saudara yang berstatus kakak terhadap elemen-elemen objek sampai elemen sesuai selektor
next([selektor])			= Memperoleh adik yang tepat mengikuti elemen-elemen objek
nextAll([selektor])			= Memperoleh semua adik elemen-elemen objek
nextUntil([selektor])		= Memperoleh saudara yang berstatus adik terhadap elemen-elemen objek hingga elemen yang sesuai selektor dijumpai

*perhatikan tanda kurung siku "[]", itu menandakan bahwa selektor bisa dipakai untuk memfilter

*/