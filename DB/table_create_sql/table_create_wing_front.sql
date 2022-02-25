-- Table: public.wing_front

-- DROP TABLE IF EXISTS public.wing_front;

CREATE TABLE IF NOT EXISTS public.wing_front
(
    wing_id numeric(4,0) NOT NULL DEFAULT nextval('wings_wing_id_seq'::regclass),
    degree numeric(10,0),
    CONSTRAINT wings_pkey PRIMARY KEY (wing_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wing_front
    OWNER to postgres;