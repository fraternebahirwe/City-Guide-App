# City Guide

A simple React + TypeScript app for browsing city travel guides. Pick a city from the list to see its currency, timezone, top attractions, and popular local food.

## Tech stack

- React 18 + TypeScript
- Vite
- Bootstrap 5

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build

```bash
npm run build
```

## Project structure

- `src/data/cities.ts` — city data (name, country, currency, timezone, attractions, food)
- `src/components/CityList.tsx` — sidebar list of cities
- `src/components/CityDetail.tsx` — detail panel for the selected city
- `src/App.tsx` — wires the list and detail view together with selection state

## Adding a city

Add a new entry to the `CITIES` array in `src/data/cities.ts` following the existing `City` shape.
