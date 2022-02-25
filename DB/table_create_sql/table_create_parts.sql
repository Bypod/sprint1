-- Table: public.parts

-- DROP TABLE IF EXISTS public.parts;

CREATE TABLE IF NOT EXISTS public.parts
(
    part_id integer NOT NULL DEFAULT nextval('parts_part_id_seq'::regclass),
    engine_serial character varying(50) COLLATE pg_catalog."default",
    wing_id integer,
    "wing_ rear_id" integer,
    trans_id integer,
    description character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT parts_pkey PRIMARY KEY (part_id),
    CONSTRAINT trans_id FOREIGN KEY (trans_id)
        REFERENCES public.transmission (trans_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT wing_id FOREIGN KEY (wing_id)
        REFERENCES public.wing_front (wing_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT wing_id_rear FOREIGN KEY ("wing_ rear_id")
        REFERENCES public.wing_rear (wing_rear_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.parts
    OWNER to postgres;