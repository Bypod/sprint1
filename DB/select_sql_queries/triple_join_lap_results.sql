SELECT first_name, last_name, country, dob, final_pos, date, lap_time
	FROM public.driver
JOIN race_results on race_results.driver_id=driver.driver_id
Join practice on practice.driver_id=driver.driver_id
join laps on laps.lap_id=practice.lap_id

	