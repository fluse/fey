module.exports = {

    list: {
        dep_date_too_soon: {
            field: 'date',
            message: 'Das Abholdatum liegt nicht weit genug in der Zukunft'
        },
        dep_date_in_past: {
            field: 'date',
            message: 'Das Abholdatum liegt in der Vergangenheit'
        },
        invalid_depdate: {
            field: 'date',
            message: 'Das Abholdatum ist nicht gültig'
        },
        dep_date_greater_dest_date: {
            field: 'date',
            message: 'Das Rückgabedatum lieft vor dem Abholdatum'
        },
        invalid_destdate: {
            field: 'date',
            message: 'Das Rückgabedatum ist nicht gültig'
        },
        invalid_depcity: {
            field: 'depCity',
            message: 'Der Abholort ist nicht gültig'
        },
        invalid_destcity: {
            field: 'destCity',
            message: 'Der Rückgabeort ist nicht gültig'
        },
        no_stations_opened: {
            field: 'search',
            message: '<strong>Leider konnten wir zu Ihrer Suche keine passenden Angebote finden.</strong><br />Bitte ändern Sie Ihr Abhol-/ Rückgabedatum oder die Abholstation.<br />Gerne können Sie uns auch direkt kontaktieren unter Tel. 0800 - 334 334 344 oder unter info@camperdays.de.'
        },
        dep_date_too_far_away: {
            field: 'date',
            message: 'Das Abholdatum liegt zu weit in der Zukunft'
        },
        dest_date_too_far_away: {
            field: 'date',
            message: 'Das Rückgabedatum liegt zu weit in der Zukunft'
        },
        dest_date_too_soon: {
            field: 'date',
            message: 'Der Reisezeitraum ist zu gering'
        },
        invalid_minumum_booking_duration: {
            field: 'date',
            message: 'Der Reisezeitraum ist zu gering'
        },
        invalid_minimum_booking_duration: {
            field: 'date',
            message: 'Der Reisezeitraum ist zu gering'
        },
        no_offers_found: {
            field: 'search',
            message: '<strong>Leider konnten wir zu Ihrer Suche keine passenden Angebote finden.</strong><br />Bitte ändern Sie Ihr Abhol-/ Rückgabedatum oder die Abholstation.<br />Gerne können Sie uns auch direkt kontaktieren unter Tel. 0800 - 334 334 344 oder unter info@camperdays.de.'
        }
    },

    getErrorByField(error, field) {

        if (this.list[error].field === field) {
            return this.list[error].message;
        }

        return null;

    }

};
