-- Table: public.tires

-- DROP TABLE IF EXISTS public.tires;

CREATE TABLE IF NOT EXISTS public.tires
(
    tire_id integer NOT NULL DEFAULT nextval('tires_tire_id_seq'::regclass),
    brand character(20) COLLATE pg_catalog."default",
    compound character varying(30) COLLATE pg_catalog."default",
    weather character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT tires_pkey PRIMARY KEY (tire_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tires
    OWNER to postgres;