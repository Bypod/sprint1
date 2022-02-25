-- Result of Query where there was a race cancellation or a Did Not finish Result
SELECT loc_id, loc_name, country, city, track_type, final_pos
	FROM public.location
join race_results using(loc_id)
where final_pos = 'DNF'
or final_pos = 'CAN'


