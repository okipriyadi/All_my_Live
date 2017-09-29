//standar
func greet(name){
	fmt.println(name)
}

//dengan type argumen
func greet(name string){
	fmt.println(name)
}

//dengan return argumen
func greet(name string) string {
	fmt.println(name)
	a = "hallo" + nama
	return a
}
	
//dengan return argumen di awal, pada contoh berikut hanya variabel "a" yg akan di return 
func greet(name string) (a string) {
	fmt.println(name)
	a = "hallo" + nama
	b = "selamat datang"
	return a
}


//return multiple return value 
func greet(name string) (string, string) {
	fmt.println(name)
	a = "hallo" + nama
	b = "selamat datang"
	return a, b
}

//dengan multiple argumen (variadic) 
func greet(name ...string)  string {
	fmt.println(name)
	a = "hallo" + nama // hasilnya dalam bentuk slice/array [nama1, nama2, nama3]
	b = "selamat datang"
	return a, b
}