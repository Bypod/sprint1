-- Table: public.transmission

-- DROP TABLE IF EXISTS public.transmission;

CREATE TABLE IF NOT EXISTS public.transmission
(
    trans_id integer NOT NULL DEFAULT nextval('transmission_trans_id_seq'::regclass),
    serial character varying(25) COLLATE pg_catalog."default",
    details character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT transmission_pkey PRIMARY KEY (trans_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.transmission
    OWNER to postgres;