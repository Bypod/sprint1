-- Table: public.driver

-- DROP TABLE IF EXISTS public.driver;

CREATE TABLE IF NOT EXISTS public.driver
(
    driver_id numeric(2,0) NOT NULL,
    first_name character varying(20) COLLATE pg_catalog."default",
    last_name character varying(20) COLLATE pg_catalog."default",
    car_number numeric(3,0),
    country character(40) COLLATE pg_catalog."default",
    dob date,
    CONSTRAINT "Driver_pkey" PRIMARY KEY (driver_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.driver
    OWNER to postgres;