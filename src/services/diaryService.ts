import { API, graphqlOperation } from 'aws-amplify'
import { createDiaryEntry, deleteDiaryEntry, updateDiaryEntry } from '@graphql/mutations'
import { listDiaryEntrys } from '@graphql/queries'
import { IDiaryEntry } from '@models/diary'

class DiaryService {
    async getAllDiaryEntries(): Promise<IDiaryEntry[]> {
		const entries: any = await API.graphql(graphqlOperation(listDiaryEntrys))
		return entries.data.listDiaryEntrys.items.map(entry => {
			return {
				id: entry.id,
				userID: entry.userID,
				date: entry.date,
				diaryBody: entry.diaryBody
			}
		})
	}

	async saveEntry(userID: string, selectedDay: string, text: String) {
		const entries = await this.getAllDiaryEntries()
		const currentEntry = entries.filter(entry => entry.userID === userID && entry.date === selectedDay)[0]
		if (currentEntry) {
			API.graphql(graphqlOperation(updateDiaryEntry, {
				input: {
					id: currentEntry.id,
					userID: currentEntry.userID,
					date: currentEntry.date,
					diaryBody: text
				}
			}))
		} else {
			API.graphql(graphqlOperation(createDiaryEntry, {
				input: {
					userID: userID,
					date: selectedDay,
					diaryBody: text
				}
			}))
		}
    }
    
    async deleteEntry(userID: string, selectedDay: string) {
        const entries = await this.getAllDiaryEntries()
        const currentEntry = entries.filter(entry => entry.userID === userID && entry.date === selectedDay)[0]
		if (currentEntry) {
			API.graphql(graphqlOperation(deleteDiaryEntry, {
				input: {
					id: currentEntry.id,
					userID: currentEntry.userID,
					date: currentEntry.date,
					diaryBody: currentEntry.diaryBody
				}
			}))
		}
    }
}

export default new DiaryService()