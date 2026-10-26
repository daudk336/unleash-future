export declare const workshopRegistrationStatusEnum: import("drizzle-orm/pg-core").PgEnum<["registered", "waitlisted", "cancelled"]>;
export declare const workshopRegistrationsTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "workshop_registrations";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "workshop_registrations";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        workshopId: import("drizzle-orm/pg-core").PgColumn<{
            name: "workshop_id";
            tableName: "workshop_registrations";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        attendeeClerkUserId: import("drizzle-orm/pg-core").PgColumn<{
            name: "attendee_clerk_user_id";
            tableName: "workshop_registrations";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "workshop_registrations";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "cancelled" | "registered" | "waitlisted";
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["registered", "waitlisted", "cancelled"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        registeredAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "registered_at";
            tableName: "workshop_registrations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "workshop_registrations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertWorkshopRegistrationSchema: import("zod/v4").ZodObject<{
    status: import("zod/v4").ZodOptional<import("zod/v4").ZodEnum<{
        cancelled: "cancelled";
        registered: "registered";
        waitlisted: "waitlisted";
    }>>;
    workshopId: import("zod/v4").ZodUUID;
    attendeeClerkUserId: import("zod/v4").ZodString;
}, {
    out: {};
    in: {};
}>;
export type InsertWorkshopRegistration = typeof workshopRegistrationsTable.$inferInsert;
export type WorkshopRegistration = typeof workshopRegistrationsTable.$inferSelect;
//# sourceMappingURL=workshop-registrations.d.ts.map