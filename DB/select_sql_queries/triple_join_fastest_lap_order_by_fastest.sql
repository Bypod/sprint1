SELECT first_name, last_name, country, dob, date, lap_time
	FROM public.driver 
JOIN race_results using(driver_id)
JOIN practice using(driver_id)
join laps using(lap_id)
order by lap_time asc