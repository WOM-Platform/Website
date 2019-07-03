SHELL := /bin/bash

DC := docker-compose -f docker-compose.yml -f docker-compose.custom.yml
DC_RUN := ${DC} run --rm

.PHONY: up
up:
	${DC} up -d
	${DC} ps
	@echo
	@echo 'Service is now up'
	@echo

.PHONY: ps
ps:
	${DC} ps

.PHONY: rs
rs:
	${DC} restart

.PHONY: stop
stop:
	${DC} stop

.PHONY: rm
rm rmc: stop
	${DC} rm -f
