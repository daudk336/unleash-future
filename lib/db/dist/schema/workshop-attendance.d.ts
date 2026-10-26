export declare const attendanceStatusEnum: import("drizzle-orm/pg-core").PgEnum<["present", "absent", "excused"]>;
export declare const workshopAttendanceTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "workshop_attendance";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "workshop_attendance";
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
        registrationId: import("drizzle-orm/pg-core").PgColumn<{
            name: "registration_id";
            tableName: "workshop_attendance";
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
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "workshop_attendance";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "present" | "absent" | "excused";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["present", "absent", "excused"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        markedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "marked_at";
            tableName: "workshop_attendance";
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
        markedByClerkUserId: import("drizzle-orm/pg-core").PgColumn<{
            name: "marked_by_clerk_user_id";
            tableName: "workshop_attendance";
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
    };
    dialect: "pg";
}>;
export declare const insertWorkshopAttendanceSchema: import("zod/v4").ZodObject<{
    status: import("zod/v4").ZodEnum<{
        present: "present";
        absent: "absent";
        excused: "excused";
    }>;
    registrationId: import("zod/v4").ZodUUID;
    markedByClerkUserId: import("zod/v4").ZodString;
}, {
    out: {};
    in: {};
}>;
export type InsertWorkshopAttendance = typeof workshopAttendanceTable.$inferInsert;
export type WorkshopAttendance = typeof workshopAttendanceTable.$inferSelect;
//# sourceMappingURL=workshop-attendance.d.ts.map