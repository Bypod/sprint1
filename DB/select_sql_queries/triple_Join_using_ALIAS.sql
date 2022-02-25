SELECT first_name, last_name, country, dob, final_pos, date, lap_time
	FROM public.driver as A
JOIN race_results as B on B.driver_id=A.driver_id
Join practice as C on C.driver_id=A.driver_id
join laps as D on D.lap_id=C.lap_id



