-- Table: public.cars

-- DROP TABLE IF EXISTS public.cars;

CREATE TABLE IF NOT EXISTS public.cars
(
    car_id integer NOT NULL DEFAULT nextval('cars_car_id_seq'::regclass),
    engine_id character varying(50) COLLATE pg_catalog."default",
    weight numeric(5,0),
    make character varying(15) COLLATE pg_catalog."default",
    chasis_id character varying(40) COLLATE pg_catalog."default",
    wing_id integer,
    wing_rear_id integer,
    tire_id integer DEFAULT nextval('cars_tire_id_seq'::regclass),
    parts_id integer,
    CONSTRAINT cars_pkey PRIMARY KEY (car_id),
    CONSTRAINT parts_id FOREIGN KEY (parts_id)
        REFERENCES public.parts (part_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT tire_id FOREIGN KEY (tire_id)
        REFERENCES public.tires (tire_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT wing_front FOREIGN KEY (wing_id)
        REFERENCES public.wing_front (wing_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT wing_rear FOREIGN KEY (wing_rear_id)
        REFERENCES public.wing_rear (wing_rear_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cars
    OWNER to postgres;

COMMENT ON CONSTRAINT tire_id ON public.cars
    IS 'unique id to breakdown tire manufactor, temp, wear, conditions applicable';