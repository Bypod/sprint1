SELECT p_session_id, date, driver_id, ambient_temp, track_temp, lap_id, car_id
	FROM public.practice
where track_temp between 22 and 24
order by track_temp desc
