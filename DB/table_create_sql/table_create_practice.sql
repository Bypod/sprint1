-- Table: public.practice

-- DROP TABLE IF EXISTS public.practice;

CREATE TABLE IF NOT EXISTS public.practice
(
    p_session_id integer NOT NULL DEFAULT nextval('practice_p_session_id_seq'::regclass),
    date date,
    driver_id numeric(2,0),
    ambient_temp numeric(2,0),
    track_temp numeric(2,0),
    lap_id bigint DEFAULT nextval('practice_lap_id_seq'::regclass),
    car_id integer,
    CONSTRAINT practice_pkey PRIMARY KEY (p_session_id),
    CONSTRAINT car_id FOREIGN KEY (car_id)
        REFERENCES public.cars (car_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT driver_id FOREIGN KEY (driver_id)
        REFERENCES public.driver (driver_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT lap_id FOREIGN KEY (lap_id)
        REFERENCES public.laps (lap_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.practice
    OWNER to postgres;