-- Table: public.laps

-- DROP TABLE IF EXISTS public.laps;

CREATE TABLE IF NOT EXISTS public.laps
(
    lap_id bigint NOT NULL,
    lap_time numeric(6,3),
    CONSTRAINT laps_pkey PRIMARY KEY (lap_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.laps
    OWNER to postgres;