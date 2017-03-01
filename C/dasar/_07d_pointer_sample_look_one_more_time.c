#include <stdio.h>
void go_south_east(int *lat, int *lon){
	printf("latitude di east %p\n", &lat);
	printf("latitude di east %p\n", &lon);
	printf("latitude di east %p\n", lat);
	printf("latitude di east %p\n", lon);
	*lat = *lat - 1;
	*lon = *lon + 1;
}

void go_south_west(int *lat, int *lon){
	printf("latitude di west %p\n", &lat);
	printf("latitude di west %p\n", &lon);
	printf("latitude di west %p\n", lat);
	printf("latitude di west %p\n", lon);
	lat = lat - 1;
	lon = lon + 1;
}

int main(){
	int latitude = 32;
	int longitude = -64;
	printf("latitude di main %p\n", &latitude);
	printf("longitude di main %p\n", &longitude);
	go_south_east(&latitude, &longitude);
	printf("Avast! Now at: [%i, %i]\n", latitude, longitude);
	go_south_west(&latitude, &longitude);
	printf("Avast! Now at: [%i, %i]\n", latitude, longitude);
	return 0;
}
