# I used  this program to learn about python's CSV module
# CSV files are simplified spreadsheets stored as plaintext files
# Each line in a spreadsheet represents a row in the spreadsheet, and commas separate the cells in a row
import csv
# STEP 1 - Create A Reader object
file_object = open("csv_file.csv")
file_reader_object = csv.reader(file_object)
print(tuple(file_reader_object))