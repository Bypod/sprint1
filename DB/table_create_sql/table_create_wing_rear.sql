-- Table: public.wing_rear

-- DROP TABLE IF EXISTS public.wing_rear;

CREATE TABLE IF NOT EXISTS public.wing_rear
(
    wing_rear_id numeric(6,0) NOT NULL,
    degree numeric(10,2),
    CONSTRAINT wing_rear_pkey PRIMARY KEY (wing_rear_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wing_rear
    OWNER to postgres;