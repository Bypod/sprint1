-- Table: public.location

-- DROP TABLE IF EXISTS public.location;

CREATE TABLE IF NOT EXISTS public.location
(
    loc_id integer NOT NULL DEFAULT nextval('location_loc_id_seq'::regclass),
    loc_name character varying(40) COLLATE pg_catalog."default",
    country character(40) COLLATE pg_catalog."default",
    city character varying(40) COLLATE pg_catalog."default",
    track_type character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT location_pkey PRIMARY KEY (loc_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.location
    OWNER to postgres;