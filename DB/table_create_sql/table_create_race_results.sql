-- Table: public.race_results

-- DROP TABLE IF EXISTS public.race_results;

CREATE TABLE IF NOT EXISTS public.race_results
(
    race_id integer NOT NULL DEFAULT nextval('race_results_race_id_seq'::regclass),
    loc_id integer,
    final_pos character varying(3) COLLATE pg_catalog."default",
    driver_id numeric(2,0),
    car_id integer,
    tire_id integer,
    CONSTRAINT race_results_pkey PRIMARY KEY (race_id),
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
    CONSTRAINT location_id FOREIGN KEY (loc_id)
        REFERENCES public.location (loc_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT tire_id FOREIGN KEY (tire_id)
        REFERENCES public.tires (tire_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.race_results
    OWNER to postgres;