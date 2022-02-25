SELECT first_name, last_name, country, dob, final_pos, date, lap_time, weight,make,chasis_id, wing_front.degree as Front_W_Degree, wing_rear.degree as Rear_W_Degree    
	FROM public.driver 
JOIN race_results using(driver_id)
JOIN practice using(driver_id)
join laps using(lap_id)
join cars on cars.car_id=race_results.car_id
join wing_front on wing_front.wing_id=cars.wing_id
join wing_rear on wing_rear.wing_rear_id=cars.wing_rear_id
order by final_pos desc
