@echo off
color 0a
set year=%date:~0,4%
set date=%date:~5,2%%date:~8,2%


hugo new Article/%year%/%date%.md
