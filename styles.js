const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  selectedDateButton: {
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDateButtonText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
  },
