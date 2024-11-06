import { carProps } from "@/types";

export async function fetchCars(){
    const headers = {
        'x-rapidapi-key': '6f8b752166mshd72cbd3229f278ap139b64jsna99ee7e78f37',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}
export const generatCarImageUrl = (car: carProps, angle?: String) => {
    
}