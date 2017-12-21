const powerSourceEnum = {
	0x00: 'unknown', 
	0x01: 'mains (single phase)',
	0x02: 'mains (3 phase)',
	0x03: 'battery',
	0x04: 'DC source',
	0x05: 'emergency mains constantly powered',
	0x06: 'emergency mains and transfer switch',
};

const physicalEnvEnum = {
	0x00: 'Unspecified environment',			
	0x01: 'Mirror (ZSE Profile)',
	0x01: 'Atrium',
	0x02: 'Bar',
	0x03: 'Courtyard',
	0x04: 'Bathroom',
	0x05: 'Bedroom',
	0x06: 'Billiard Room',
	0x07: 'Utility Room',
	0x08: 'Cellar',
	0x09: 'Storage Closet',
	0x0a: 'Theater',
	0x0b: 'Office',
	0x0c: 'Deck',
	0x0d: 'Den',
	0x0e: 'Dining Room',
	0x0f: 'Electrical Room',
	0x10: 'Elevator',
	0x11: 'Entry',
	0x12: 'Family Room',
	0x13: 'Main Floor',
	0x14: 'Upstairs',
	0x15: 'Downstairs',
	0x16: 'Basement/Lower Level',
	0x17: 'Gallery',0x18: 'Game Room',
	0x19: 'Garage',
	0x1a: 'Gym',
	0x1b: 'Hallway',
	0x1c: 'House',
	0x1d: 'Kitchen',
	0x1e: 'Laundry Room',
	0x1f: 'Library',
	0x20: 'Master Bedroom',
	0x21: 'Mud Room (small room for coats and boots)',
	0x22: 'Nursery',
	0x23: 'Pantry',
	0x24: 'Office',
	0x25: 'Outside',
	0x26: 'Pool',
	0x27: 'Porch',
	0x28: 'Sewing Room',
	0x29: 'Sitting Room',
	0x2a: 'Stairway',
	0x2b: 'Yard',
	0x2c: 'Attic',
	0x2d: 'Hot Tub',
	0x2e: 'Living Room',
	0x2f: 'Sauna',
	0x30: 'Shop/Workshop',
	0x31: 'Guest Bedroom',
	0x32: 'Guest Bath',
	0x33: 'Powder Room (1/2 bath)',
	0x34: 'Back Yard',
	0x35: 'Front Yard',
	0x36: 'Patio',
	0x37: 'Driveway',
	0x38: 'Sun Room',
	0x39: 'Living Room',
	0x3a: 'Spa',
	0x3b: 'Whirlpool',
	0x3c: 'Shed',
	0x3d: 'Equipment Storage',
	0x3e: 'Hobby/Craft Room',
	0x3f: 'Fountain',
	0x40: 'Pond',
	0x41: 'Reception Room',
	0x42: 'Breakfast Room',
	0x43: 'Nook',
	0x44: 'Garden',
	0x45: 'Balcony',
	0x46: 'Panic Room',
	0x47: 'Terrace',
	0x48: 'Roof',
	0x49: 'Toilet',
	0x4a: 'Toilet Main',
	0x4b: 'Outside Toilet',
	0x4c: 'Shower room',
	0x4d: 'Study',
	0x4e: 'Front Garden',
	0x4f: 'Back Garden',
	0x50: 'Kettle',
	0x51: 'Television',
	0x52: 'Stove',
	0x53: 'Microwave',
	0x54: 'Toaster',
	0x55: 'Vacuum',
	0x56: 'Appliance',
	0x57: 'Front Door',
	0x58: 'Back Door',
	0x59: 'Fridge Door',
	0x60: 'Medication Cabinet Door',
	0x61: 'Wardrobe Door',
	0x62: 'Front Cupboard Door',
	0x63: 'Other Door',
	0x64: 'Waiting Room',
	0x65: 'Triage Room',
	0x66: 'Doctor’s Office',
	0x67: 'Patient’s Private Room',
	0x68: 'Consultation Room',
	0x69: 'Nurse Station',
	0x6a: 'Ward',
	0x6b: 'Corridor',
	0x6c: 'Operating Theatre',
	0x6d: 'Dental Surgery Room',
	0x6e: 'Medical Imaging Room',
	0x6f: 'Decontamination Room',
	0xff: 'Unknown environment',
};

module.exports = {
	"id": 0,
	"name": "genBasic",
	"specific": false,
	"attributes": {
		"0": { "cluster": 0, "id": 0, "name": "zclVersion", "type": "uint8", "mandatory": true, "read": true, "write": false, "specific": false, "unit": null, default:0x2 },
		"1": { "cluster": 0, "id": 1, "name": "appVersion", "type": "uint8", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:0x0 },
		"2": { "cluster": 0, "id": 2, "name": "stackVersion", "type": "uint8", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:0x0 },
		"3": { "cluster": 0, "id": 3, "name": "hwVersion", "type": "uint8", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:0x0 },
		"4": { "cluster": 0, "id": 4, "name": "manufacturerName", "type": "charStr", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:'' },
		"5": { "cluster": 0, "id": 5, "name": "modelId", "type": "charStr", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:'' },
		"6": { "cluster": 0, "id": 6, "name": "dateCode", "type": "charStr", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:'' },
		"7": { "cluster": 0, "id": 7, "name": "powerSource", "type": "enum8", "mandatory": true, "read": true, "write": false, "specific": false, "unit": null, default:0x0, enum: powerSourceEnum },
		"8": { "cluster": 0, "id": 8, "name": "appProfileVersion", "type": "enum8", "mandatory": null, "read": null, "write": null, "specific": null, "unit": null },
		"16": { "cluster": 0, "id": 16, "name": "locationDesc", "type": "charStr", "mandatory": false, "read": true, "write": true, "specific": false, "unit": null, default:'' },
		"17": { "cluster": 0, "id": 17, "name": "physicalEnv", "type": "enum8", "mandatory": false, "read": true, "write": true, "specific": false, "unit": null, default:0x0, enum: physicalEnvEnum },
		"18": { "cluster": 0, "id": 18, "name": "deviceEnabled", "type": "boolean", "mandatory": false, "read": true, "write": true, "specific": false, "unit": null, default:0x1 },
		"19": { "cluster": 0, "id": 19, "name": "alarmMask", "type": "bitmap8", "mandatory": false, "read": true, "write": true, "specific": false, "unit": null, default:0x0 },
		"20": { "cluster": 0, "id": 20, "name": "disableLocalConfig", "type": "bitmap8", "mandatory": false, "read": true, "write": true, "specific": false, "unit": null, default:0x0 },
		"16384": { "cluster": 0, "id": 16384, "name": "swBuildId", "type": "charStr", "mandatory": false, "read": true, "write": false, "specific": false, "unit": null, default:'' }
	},
	"commands": {
		"0": { "id": 0, "name": "resetFactDefault" }
	},
	"responses": {
	},
}
