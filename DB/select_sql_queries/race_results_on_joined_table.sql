SELECT first_name, last_name, country, dob, final_pos
	FROM public.driver
JOIN race_results on race_results.driver_id=driver.driver_id
	